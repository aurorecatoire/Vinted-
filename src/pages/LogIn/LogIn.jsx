import "./LogIn.css";
<<<<<<< HEAD
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
=======
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogIn = ({ setUser }) => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
>>>>>>> 179601914db46c50fcb3bea61c702416fdeb91c6
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Merci de remplir tous les champs");
<<<<<<< HEAD
      return;
    }

    try {
=======

      return; // stoppe l'exécution si un champ est vide
    }

    try {
      console.log(email);
      console.log(password);
>>>>>>> 179601914db46c50fcb3bea61c702416fdeb91c6
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email, password }
      );
      if (response.data.token) {
        setUser(response.data.token);
        setErrorMessage("");
        navigate("/");
      } else {
        setErrorMessage("Un problème est survenu");
      }
    } catch (error) {
      error.response
        ? setErrorMessage(error.response.data.message)
        : console.log(error);
    }
  };

  return (
<<<<<<< HEAD
    <main className="login-page">
      <h1 className="login-title">Se connecter</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        {errorMessage && <p className="login-error">{errorMessage}</p>}

        <button type="submit" className="login-button">
          Se connecter
        </button>
      </form>

      <Link to="/signup">
        <p className="login-noaccount">Pas encore de compte ? Inscris-toi !</p>
=======
    <main className="logIn">
      <h1 className="connexion">Se connecter</h1>
      <form onSubmit={handleSubmit}> {/* mise en place du formulaire*/}
        <div className="form_logIn">
          <label htmlFor="email" />
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(event) => SetEmail(event.target.value)}
          />
        </div>
        <div className="form_logIn">
          <label htmlFor="password" />
          <input
            type="password"
            placeholder="Mot de passe"
            id="password"
            value={password}
            onChange={(event) => SetPassword(event.target.value)}
          />
        </div>

        <button type="submit">Se connecter</button>
      </form>
      <Link to="/signup">
        <p className="no_account">Pas encore de compte ? Inscris-toi !</p>
>>>>>>> 179601914db46c50fcb3bea61c702416fdeb91c6
      </Link>
    </main>
  );
};

export default LogIn;
