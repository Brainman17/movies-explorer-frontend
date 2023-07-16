import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import mainApi from "../../utils/MainApi";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
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
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [profileMessage, setProfileMessage] = useState("");

  const cbRegister = useCallback(async ({ name, email, password }) => {
    const data = await mainApi.register(name, email, password);
    try {
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
        return setLoginError("Неправильный логин или пароль");
      } else {
        return setLoginError("При авторизации пользователя произошла ошибка!");
      }
    }
  }, []);

  const cbTokenCheck = useCallback(async () => {
    try {
      const jwt = localStorage.getItem("jwt");

      const user = await mainApi.getContent(jwt);
      if (!user) {
        throw new Error("No User");
      }
      setCurrentUser(user);
      setIsLoggedIn(true);
      navigate(location);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    cbTokenCheck();
  }, [isLoggedIn]);

  const cbLogout = useCallback(() => {
    setIsLoggedIn(false);
    navigate("/sign-in");
    localStorage.removeItem("jwt");
  }, []);

  function handleUpdateUser({ name, email }) {
    mainApi
      .patchUsers(name, email)
      .then((user) => {
        setCurrentUser(user);
        setProfileMessage("Все ок");
      })
      .catch((e) => {
        setProfileMessage("Ошибка");
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={<Movies />}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={<SavedMovies />}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={<Profile onLogout={cbLogout} currentUser={currentUser}/>}
              ></ProtectedRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <EditProfile
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

//ssh jegor-andreychuk@62.84.126.169
