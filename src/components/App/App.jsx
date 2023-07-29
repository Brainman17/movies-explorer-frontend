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

  // Серверные ошибки
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [updateUserError, setUpdateUserError] = useState("");

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [filterMovies, setFilterMovies] = useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = useState([]);

  useEffect(() => {
    if (movies.length >= 0) {
      setFilterMovies(movies);
    }
  }, [movies]);

  useEffect(() => {
    // TODO delete
    if (savedMovies.length >= 0) {
      setFilterSavedMovies(savedMovies);
    }
  }, [savedMovies]);

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
        return setRegisterError("Пользователь с таким email уже существует");
      } else {
        return setRegisterError(
          "При регистрации пользователя произошла ошибка"
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
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        navigate("/movies");
      }
    } catch (e) {
      console.error(e);
      if (e === "Ошибка:( 401") {
        return setLoginError("Вы ввели неправильный логин или пароль");
      } else {
        return setLoginError("При авторизации произошла ошибка");
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
        navigate(location);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (currentUser._id) {
      const localSavedMovies = JSON.parse(
        localStorage.getItem(`saveMovie_${currentUser._id}`)
      );
      const arrayMovies = [moviesApi.getMovies()];

      if (!localSavedMovies) {
        arrayMovies.push(mainApi.getMovies());
      }
      Promise.all(arrayMovies).then(([movies, saved]) => {
        const savedMovies = !saved ? localSavedMovies : saved.data;
        // console.log("savedMovies ", savedMovies);

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
      });
    }
  }, [currentUser]);

  function handleSaveMovie(data) {
    // console.log("data =>", data)
    mainApi
      .saveMovies(data)
      .then(({ data: movie }) => {
        setSavedMovies((prev) => {
          const data = [movie, ...prev];
          // console.log('data =>',data)
          localStorage.setItem(
            `saveMovie_${currentUser._id}`,
            JSON.stringify(data)
          );
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
          localStorage.setItem(
            `saveMovie_${currentUser._id}`,
            JSON.stringify(data)
          );
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


  useEffect(() => {
    cbTokenCheck();
  }, [isLoggedIn]);

  const cbLogout = useCallback(() => {
    setIsLoggedIn(false);
    navigate("/sign-in");
    localStorage.removeItem("jwt");
  }, []);

  const cbUpdateUser = useCallback(async ({ name, email }) => {
    try {
      const user = await mainApi.patchUsers(name, email);

      setCurrentUser(user.data);
      setIsLoggedIn(true);
      navigate("/profile");
    } catch (e) {
      console.error(e);
      if (e === "Ошибка:( 409") {
        return setUpdateUserError("Пользователь с таким email уже существует");
      } else {
        return setUpdateUserError("При обновлении профиля произошла ошибка");
      }
    }
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ movies, savedMovies, setFilterSavedMovies, setFilterMovies, currentUser, filterMovies, filterSavedMovies }}
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
              ></ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={<Profile onLogout={cbLogout} />}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={
                  <EditProfile
                    updateUserError={updateUserError}
                    onUpdateUser={cbUpdateUser}
                  />
                }
              />
            }
          />
          <Route
            path="/sign-up"
            element={
              <Register onRegister={cbRegister} registerError={registerError} />
            }
          />
          <Route
            path="/sign-in"
            element={<Login onLogin={cbLogin} loginError={loginError} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

// ssh jegor-andreychuk@158.160.100.173
