import "./Header.css";
import Logo from "../../assets/img/Vinted_logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  let navigate = useNavigate();
  return (
    <header>
      <div className="containerHeader">
        <Link to="/">
          <img alt="logo de Vinted" src={Logo} />
        </Link>
        <div className="searchContainer">
          <FaSearch className="searchIcon" />
          <input
            type="text"
            name="recherche"
            placeholder="Recherche des articles"
          />
        </div>
        {token ? (
          <button className="deconnection"
            onClick={() => {
              setUser(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <div className="buttonsOfHeader">
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </div>
        )}
        <button
          className="sellyourobjects"
          onClick={() => {
            token ? navigate("/publish") : navigate("/login"); //Si l'utilisateur est authentifié, il est redirigé vers la page de publication des annonces, sinon, la page de connexion s'ouvre
          }}
        >
          Vends tes articles
        </button>
      </div>
    </header>
  );
};

export default Header;

//changer les onclick
