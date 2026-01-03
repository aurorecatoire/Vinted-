import "./Publish.css";
import { useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState(null);
  const [exchange, setExchange] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("brand", brand);
    formData.append("city", place);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("condition", condition);
    formData.append("picture", picture);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Annonce publiée :", response.data);
      navigate("/home"); // redirection après publication
    } catch (error) {
      console.error(error.response || error);
    }
  };

  return (
    <main className="publish-page">
      <div className="publish-container">
        <h1 className="publish-title">Vends ton article</h1>
        <form className="publish-form" onSubmit={handleSubmit}>
          
          <section className="publish-picture">
            <label htmlFor="picture" className="publish-file-label">
              <FaPlus /> Ajoute une photo
            </label>
            <input
              type="file"
              id="picture"
              className="publish-file-input"
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </section>

          <section className="publish-title-description">
            <div className="publish-input-group">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                id="title"
                placeholder="ex : Chemise Sézane verte"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="publish-text-input"
              />
            </div>
            <div className="publish-input-group">
              <label htmlFor="description">Décris ton article</label>
              <input
                type="text"
                id="description"
                placeholder="ex : porté quelque fois, taille correctement"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="publish-text-input"
              />
            </div>
          </section>

          <section className="publish-specific-infos">
            <div className="publish-input-group">
              <label htmlFor="brand">Marque</label>
              <input
                type="text"
                id="brand"
                placeholder="ex : Zara"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="publish-text-input"
              />
            </div>
            <div className="publish-input-group">
              <label htmlFor="size">Taille</label>
              <input
                type="text"
                id="size"
                placeholder="ex : L / 40 / 12"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="publish-text-input"
              />
            </div>
            <div className="publish-input-group">
              <label htmlFor="color">Couleur</label>
              <input
                type="text"
                id="color"
                placeholder="ex : Fuschia"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="publish-text-input"
              />
            </div>
            <div className="publish-input-group">
              <label htmlFor="condition">État</label>
              <input
                type="text"
                id="condition"
                placeholder="ex : Neuf avec étiquette"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="publish-text-input"
              />
            </div>
            <div className="publish-input-group">
              <label htmlFor="place">Lieu</label>
              <input
                type="text"
                id="place"
                placeholder="ex : Paris"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="publish-text-input"
              />
            </div>
          </section>

          <section className="publish-price-exchange">
            <div className="publish-input-group">
              <label htmlFor="price">Prix</label>
              <input
                type="text"
                id="price"
                placeholder="ex : 0,00 €"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="publish-price-input"
              />
            </div>

            <div className="publish-exchange">
              <input
                type="checkbox"
                id="exchange"
                checked={exchange}
                onChange={(e) => setExchange(e.target.checked)}
                className="publish-checkbox"
              />
              <span>Je suis intéressé(e) par les échanges</span>
            </div>
          </section>

          <button type="submit" className="publish-button">
            Ajouter
          </button>
        </form>
      </div>
    </main>
  );
};

export default Publish;
