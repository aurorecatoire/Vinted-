import "./Header.css";
import Logo from "../../img/Vinted_logo.png"



const Header = () => {
  return (
    <header>
      <img alt="logo de Vinted" src={Logo} />
      <input
        type="text"
        name="recherche"
        defaultValue="Recherche des articles"
      />
      <div className="buttonsOfHeader">
        <button>S'inscrire</button> <button>Se connecter</button>
      </div>
      <button>Vends tes articles</button>
    </header>
  );
};

export default Header;
