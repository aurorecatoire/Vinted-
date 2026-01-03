import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Offer.css";
import { useNavigate } from "react-router-dom";

const Offer = ({ token }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className="mainOffer">
      <div className="containerOffer">
        {isLoading ? (
          <p>Chargement...</p>
        ) : (
          <>
            {/* IMAGE PRINCIPALE */}
            <img
              className="clothe"
              alt={data.product_name}
              src={data.product_pictures[0].secure_url}
            />

            {/* INFOS PRODUIT */}
            <section className="infoProduct">
              <p className="price">{data.product_price} €</p>

              <div className="generalInfo">
                {data.product_details.map((detail, i) => {
                  const [[key, value]] = Object.entries(detail);
                  return (
                    <div key={i}>
                      <p className="key">{key}</p>
                      <p className="value">{value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="TitleandSeller">
                <p className="productName">{data.product_name}</p>

                <p className="productDescription">{data.product_description}</p>

                {/* VENDEUR */}
                <div className="seller">
                  <img
                    alt={"avatar de " + data.owner.account.username}
                    src={data.owner.account.avatar?.secure_url}
                  />
                  <p className="pseudo">{data.owner.account.username}</p>
                </div>

                <button
                  className="ButtonOfferBuy"
                  onClick={() => {
                    token
                      ? navigate("/payment", {
                          state: {
                            title: data.product_name,
                            price: data.product_price,
                          },
                        })
                      : navigate("/login");
                  }}
                >
                  Acheter
                </button>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default Offer;
