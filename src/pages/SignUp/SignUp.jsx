import "./SignUp.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      setErrorMessage("Merci de remplir tous les champs");
      return;
    }

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { email, username, password, newsletter }
      );

      if (response.data.token) {
        setUser(response.data.token);
        setErrorMessage("");
        navigate("/");
      } else {
        setErrorMessage("Un problème est survenu...");
      }
    } catch (error) {
      error.response
        ? setErrorMessage(error.response.data.message)
        : console.log(error);
    }
  };

  return (
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
      </Link>
    </main>
  );
};

export default SignUp;
