import "./LogIn.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Merci de remplir tous les champs");
      return; // stoppe l'exécution si un champ est vide
    }

    try {
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
      </Link>
    </main>
  );
};

export default LogIn;
