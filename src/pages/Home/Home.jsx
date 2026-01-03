import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Makeorder from "../../assets/img/imageaccueil.jpg";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ({token}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate=useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <>
          <main className="mainHome">
            <section className="homeStart">
              <img alt="Femme faisant du tri" src={Makeorder} />

              <div className="startSell">
                <p>Prêts à faire du tri dans vos placards ?</p>
                <button onClick={()=>{token ? navigate("/publish"): navigate("/login")}}>Commencer à vendre</button>
              </div>
            </section>

            <div className="newOffers">
              {data.offers.map((clothe) => (
                <article key={clothe._id}>
                  <div className="ownerClothe">
                    <img
                      alt={"avatar de " + clothe.owner.account.username}
                      src={clothe.owner.account.avatar?.url}
                    />
                    <p className="pseudo">{clothe.owner.account.username}</p>
                  </div>

                  <Link to={"/offers/" + clothe._id}>
                    <img
                      className="pictureClothe"
                      alt={clothe.product_name}
                      src={clothe.product_pictures[0].secure_url}
                    />
                    <div className="down">
                      <p className="priceHome">{clothe.product_price} €</p>
                      <p className="size">
                        {
                          clothe.product_details.find(
                            (element) => element.TAILLE
                          )?.TAILLE
                        }
                      </p>
                      <p className="brand">
                        {
                          clothe.product_details.find(
                            (element) => element.MARQUE
                          )?.MARQUE
                        }
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default Home;
