import "./SignUp.css";
<<<<<<< HEAD
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
=======
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [newsletter, SetNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

>>>>>>> 179601914db46c50fcb3bea61c702416fdeb91c6
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      setErrorMessage("Merci de remplir tous les champs");
<<<<<<< HEAD
      return;
=======

      return; // stoppe l'exécution si un champ est vide
>>>>>>> 179601914db46c50fcb3bea61c702416fdeb91c6
    }

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { email, username, password, newsletter }
      );
<<<<<<< HEAD

      if (response.data.token) {
        setUser(response.data.token);
        setErrorMessage("");
        navigate("/");
      } else {
        setErrorMessage("Un problème est survenu...");
      }
=======
      if (response.data.token) {
        // S'il y a un token on le stocke dans les cookies
        setUser(response.data.token);
        // on redirige l'utilisateur vers la page home
        navigate("/");
        // reset le message d'erreur
        setErrorMessage("");
      } else {
        setErrorMessage("Un problème est survenu...");
      }

      navigate("/");
>>>>>>> 179601914db46c50fcb3bea61c702416fdeb91c6
    } catch (error) {
      error.response
        ? setErrorMessage(error.response.data.message)
        : console.log(error);
    }
  };

  return (
<<<<<<< HEAD
    <main className="signup-page">
      <h1 className="signup-title">S'inscrire</h1>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />

        <section className="signup-newsletter">
          <label className="signup-checkbox">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
            <span>S'inscrire à notre newsletter</span>
          </label>
          <p className="signup-conditions">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </section>

        {errorMessage && <p className="signup-error">{errorMessage}</p>}

        <button type="submit" className="signup-button">S'inscrire</button>
      </form>

      <Link to="/login">
        <p className="signup-alreadyaccount">
          Tu as déjà un compte ? Connecte-toi !
        </p>
=======
    <main className="signUp">
      <h1 className="inscription">S'inscrire</h1>{" "}
      {/* FORMULAIRE D'INSCRIPTION */}
      <form  onSubmit={handleSubmit}>
        <div className="form_signUp" >
          <label htmlFor="username" />
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            id="username"
            value={username}
            onChange={(event) => SetUsername(event.target.value)}
          />
        </div>
        <div className="form_signUp" >
          <label htmlFor="email" />
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(event) => SetEmail(event.target.value)}
          />
        </div>
        <div className="form_signUp" >
          <label htmlFor="password" />
          <input
            type="password"
            placeholder="Mot de passe"
            id="password"
            value={password}
            onChange={(event) => SetPassword(event.target.value)}
          />
        </div>
        <section className="checkbox">
        <div className="newsletter_checkbox">
          <input
            type="checkbox"
            onChange={(event) => SetNewsletter(event.target.checked)}
          />
          <span>S'inscrire à notre newsletter</span>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        </section>

        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login">
        <p className="already_account">Tu as déjà un compte ? Connecte-toi !</p>
>>>>>>> 179601914db46c50fcb3bea61c702416fdeb91c6
      </Link>
    </main>
  );
};

export default SignUp;
