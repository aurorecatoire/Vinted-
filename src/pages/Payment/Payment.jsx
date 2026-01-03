import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import "./Payment.css"

import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP" //clé publique
);

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state || {};
  const total_price = (Number(price) + 0.4 + 0.8).toFixed(2);

  if (!price || !title) {
    return <p>Erreur : aucune information sur le produit disponible.</p>;
  }

  const options = {
    // Type de transaction
    mode: "payment",
    // Montant de la transaction récupéré grâce à l'id
    amount: Number(price) * 100, //Stripe attend le montant en centimes
    // Devise de la transaction
    currency: "eur",
    appearance: {
      /*...*/
    },
  };
  return (
    <Elements stripe={stripePromise} options={options}>
        <main className="main_payment">
      <div className="container_payment">
        <h1 className="resumeOrder"> Résumé de la commande </h1>
        <section className="price_details">
          <div className="price_subjects">
            <p>Commande</p> <p>{price} €</p>
          </div>
          <div className="price_subjects">
            <p>Frais protection acheteurs</p> <p>0.40 €</p>
          </div>
          <div className="price_subjects">
            <p>Frais de port</p> <p>0.80 €</p>
          </div>
        </section>
        <section className="total_price_payment">
          <div>
            <p>Total</p> <p>{total_price} €</p>
          </div>
          <p>
            Il ne vous reste plus qu'une étape pour vous offrir <span>{title}</span>. Vous
            allez payer <span>{total_price} €</span> ( frais de protection et frais de port
            inclus).
          </p>
        </section>
        <CheckoutForm className="checkoutForm"/>
      </div>
      </main>
    </Elements>
  );
};

export default Payment;
