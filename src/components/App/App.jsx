import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import EditProfile from "../Profile/EditProfile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import { CurrentUserContext } from "../../utils/contexts";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isErrors, setIsErrors] = useState({});

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [filterMovies, setFilterMovies] = useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = useState([]);

  useEffect(() => {
    // TODO delete
    if (savedMovies.length >= 0) {
      setFilterSavedMovies(savedMovies);
    }
  }, [savedMovies]);

  useEffect(() => {
    if (currentUser._id) {
      setIsLoading(true);
      const localSavedMovies = JSON.parse(localStorage.getItem("saveMovie"));
      const arrayMovies = [moviesApi.getMovies()];

      if (!localSavedMovies) {
        arrayMovies.push(mainApi.getMovies());
      }
      Promise.all(arrayMovies).then(([movies, saved]) => {
        const savedMovies = !saved ? localSavedMovies : saved.data;

        const mySavedMovies = savedMovies.filter(
          (movie) => movie.owner === currentUser._id
        );
        let newMovies = movies;
        if (mySavedMovies) {
          newMovies = movies.map((movie) => {
            const currentMovie = mySavedMovies.find((savedMovie) => {
              return savedMovie.movieId === movie.id;
            });
            if (currentMovie) {
              movie._id = currentMovie._id;
            }
            return movie;
          });
        }
        setMovies(newMovies);
        setSavedMovies(mySavedMovies);
        setIsLoading(false);
      });
    }
  }, [currentUser._id]);

  useEffect(() => {
      cbTokenCheck()
      
  }, []);

  const cbRegister = useCallback(async ({ name, email, password }) => {
    try {
      const data = await mainApi.register(name, email, password);
      if (!data) {
        throw new Error(data.error);
      } else {
        navigate("/sign-in");
      }
    } catch (e) {
      console.error(e);
      if (e === "Ошибка:( 409") {
        return setError(
          "Пользователь с таким email уже существует",
          "register"
        );
      } else {
        return setError(
          "При регистрации пользователя произошла ошибка",
          "register"
        );
      }
    }
  }, []);

  const cbLogin = useCallback(async ({ email, password }) => {
    try {
      const data = await mainApi.authorize(email, password);
      if (!data) {
        throw new Error("Ошибка аутентификации");
      }
      if (data.token !== undefined) {
        JSON.stringify(localStorage.setItem("jwt", data.token));
        cbTokenCheck()
      }
    } catch (e) {
      console.error(e);
      if (e === "Ошибка:( 401") {
        return setError("Вы ввели неправильный логин или пароль", "login");
      } else {
        return setError("При авторизации произошла ошибка", "login");
      }
    }
  }, []);

  const cbTokenCheck = useCallback(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    mainApi
      .getUser(jwt)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        if(location === 'sign-in'){
          navigate('/movies');
        } else {
          navigate(location);
        }
      })
      .catch(console.error);
  }, []);

  function handleSaveMovie(data) {
    mainApi
      .saveMovies(data)
      .then(({ data: movie }) => {
        setSavedMovies((prev) => {
          const data = [movie, ...prev];
          localStorage.setItem("saveMovie", JSON.stringify(data));
          return data;
        });
        setMovies((prev) =>
          prev.map((item) => {
            if (movie.movieId === item.id) {
              item._id = movie._id;
            }
            return item;
          })
        );
      })
      .catch(console.error);
  }

  function handleDeleteMovie(id) {
    mainApi
      .deleteMovies(id)
      .then(() => {
        setSavedMovies((savedMovies) => {
          const data = savedMovies.filter(
            (savedMovie) => savedMovie._id !== id
          );
          localStorage.setItem("saveMovie", JSON.stringify(data));
          return data;
        });
        const newMovies = movies.map((item) => {
          if (id === item._id) {
            delete item._id;
            return { ...item };
          }
          return item;
        });
        setMovies(newMovies);
      })
      .catch(console.error);
  }

  const cbLogout = useCallback(() => {
    setIsLoggedIn(false);
    navigate("/sign-in");
    reset();
  }, [navigate]);

  const reset = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("saveMovie");
    localStorage.removeItem("toggleMovie");
    localStorage.removeItem("searchMovie");
    localStorage.removeItem("searchSavedMovie");
    setIsLoggedIn(false);
  };

  const setError = (error, name) => {
    setIsErrors((prev) => ({ ...prev, [name]: error }));
    setTimeout(() => {
      setIsErrors((prev) => {
        delete prev[name];
        return { ...prev };
      });
    }, 3000);
  };

  const cbUpdateUser = useCallback(async ({ name, email }) => {
    try {
      const user = await mainApi.patchUsers(name, email);
      setCurrentUser(user.data);
      setIsLoggedIn(true);
      navigate("/profile");
    } catch (e) {
      console.error(e);
      if (e === "Ошибка:( 409") {
        setError("Пользователь с таким email уже существует", "user");
      } else {
        setError("При обновлении профиля произошла ошибка", "user");
      }
    }
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        isErrors,
        isLoading,
        movies,
        savedMovies,
        setFilterSavedMovies,
        setFilterMovies,
        currentUser,
        filterMovies,
        filterSavedMovies,
      }}
    >
      <div className="page">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <Movies
                    filterMovies={filterMovies}
                    onSaveMovie={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovie}
                  />
                }
                link={"/sign-in"}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <Movies
                    filterMovies={filterMovies}
                    onSaveMovie={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovie}
                  />
                }
                link={"/sign-in"}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={<Profile onLogout={cbLogout} />}
                link={"/sign-in"}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={<EditProfile onUpdateUser={cbUpdateUser} />}
                link={"/sign-in"}
              />
            }
          />
          <Route
            path="/sign-up"
            element={
              <ProtectedRoute
                isLoggedIn={!isLoggedIn}
                element={<Register onRegister={cbRegister} />}
                link={"/movies"}
              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <ProtectedRoute
                isLoggedIn={!isLoggedIn}
                element={<Login onLogin={cbLogin} />}
                link={"/movies"}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

// ssh jegor-andreychuk@158.160.100.173
