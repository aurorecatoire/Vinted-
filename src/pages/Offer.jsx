import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import "./Offer.css";

const Offer = (props) => {
  const params = useParams();

  const index = props.data.offers.findIndex((item) => item._id === params.id);

  return (
    <div>
      <Header />
      <main>
        <img
          className="clothe"
          alt={props.data.offers[index].product_name}
          src={props.data.offers[index].product_pictures[0].secure_url}
        />
        <section className="infoProduct">
          <p className="price">{props.data.offers[index].product_price}</p>
          <div className="generalInfo">
            {props.data.offers[index].product_details.map((info, index) => (
              <div>
                <p>{info.keys}</p>
                <p>{info.values}</p>
              </div>
            ))}
          </div>
        </section>
        <Link to="/">Home</Link>
      </main>
    </div>
  );
};

export default Offer;

/*    <div className="ownerClothe">
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
              </article>*/
