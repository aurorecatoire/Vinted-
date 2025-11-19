import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Makeorder from "../img/imageaccueil.jpg";
import "./Home.css";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Link to="/offers/:id">Offres</Link>
      <main>
        <section className="homeStart">
          <img alt="Femmefaisanttri" src={Makeorder} />
          <div className="startSell">
            <p>Prêts à faire du tri dans vos placards ?</p>
            <button>Commencer à vendre</button>
          </div>
        </section>

        <div className="newOffers">
          {props.data.offers.map((clothe, index) => (
            <Link to={"/offers/"+clothe._id}>
              <article key={clothe._id}>
                <div className="ownerClothe">
                  <img
                    alt={"avatar de " + clothe.owner.account.username}
                    src={clothe.owner.account.avatar.url}
                  />
                  <p className="pseudo">{clothe.owner.account.username}</p>
                </div>
                <img
                  className="pictureClothe"
                  alt={clothe.product_name}
                  src={clothe.product_pictures[0].secure_url}
                />
                <p className="price">{clothe.product_price}</p>
                <p className="size">{clothe.product_details[1].TAILLE}</p>
                <p className="brand">{clothe.product_details[0].MARQUE}</p>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
