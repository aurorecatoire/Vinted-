import "./LogIn.css";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const SignUp = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Merci de remplir tous les champs");
      return; // stoppe l'exécution si un champ est vide
    }

    try {
      console.log(email);
      console.log(password);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email, password }
      );
      console.log(response.data);
      Cookies.set("Token", response.data.token, { expires: 7 });
      navigate("/");
    } catch (error) {
      setErrorMessage("Erreur lors de l'inscription");
    }
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" />
            <input
              type="text"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(event) => SetEmail(event.target.value)}
            />
          </div>
          <div>
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
        <p>Pas encore de compte ? Inscris-toi !</p>
      </main>
    </div>
  );
};

export default SignUp;
