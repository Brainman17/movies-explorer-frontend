class MainApi {
  constructor(options) {
    this._options = options;
    this._baseUrl = this._options.baseUrl;
    this._headers = this._options.headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка:( ${res.status}`);
  }

  register = (name, email, password) => {
    // Регистрация
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkResponse);
  };

  authorize = (email, password) => {
    // Вход
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._checkResponse);
  };

  getContent = (token) => {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  };

  getMovies = () => {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  };

  createMovies = (data) => {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  };

  deleteMovies = (movieId) => {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  };

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  patchUsers(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: "http://127.0.0.1:3005",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});
// "https://api.ea.movies.explorer.nomoredomains.rocks"
// "http://127.0.0.1:3005"

export default mainApi;
