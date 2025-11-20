import "./SignUp.css";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const SignUp = () => {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [newsletter, SetNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [token, SetToken] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      setErrorMessage("Merci de remplir tous les champs");
      return; // stoppe l'exécution si un champ est vide
    }

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { email, username, password, newsletter }
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
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              id="username"
              value={username}
              onChange={(event) => SetUsername(event.target.value)}
            />
          </div>
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
          <div className="newsletter">
            <input
              type="checkbox"
              onChange={(event) => SetNewsletter(event.target.checked)}
            />
            <p>S'inscrire à notre newsletter</p>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>

          <button type="submit">S'inscrire</button>
        </form>
        <p>Tu as déjà un compte ? Connecte-toi !</p>
      </main>
    </div>
  );
};

export default SignUp;
