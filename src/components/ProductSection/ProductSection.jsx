import "./index.css";
import { useEffect, useState } from "react";
import { GET } from "../../utils/HTTP";
import Heart from "../../assets/heart.svg";
import HeartFull from "../../assets/heart-full.svg";

const ProductSection = ({ productSection, setProductSection }) => {
  const [productData, setProductData] = useState({});
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    GET("search.php?s=" + productSection).then((data) =>
      setProductData(data.drinks[0])
    );
  }, []);

  return (
    <div className="ProductSection">
      <button
        className="ProductSection__close"
        onClick={() => setProductSection("")}
      >
        ❌
      </button>
      <img src={productData.strDrinkThumb} alt={productData.strDrink} />
      <div className="ProductSection__text">
        <div className="ProductSection__text--heading">
          <h1>{productData.strDrink}</h1>
          <p>{productData.strAlcoholic}</p>
        </div>
        <p
          className="ProductSection__text--heart"
          onClick={() => setIsLiked(!isLiked)}
        >
          <img src={isLiked ? HeartFull : Heart} alt="like" />
        </p>
      </div>
      <ul className="ProductSection__ingredients">
        <li>{productData.strIngredient1}</li>
        <li>{productData.strIngredient2}</li>
        <li>{productData.strIngredient3}</li>
        <li>{productData.strIngredient4}</li>
      </ul>
      <p className="ProductSection__instructions">
        {productData.strInstructions}
      </p>
    </div>
  );
};

export default ProductSection;
