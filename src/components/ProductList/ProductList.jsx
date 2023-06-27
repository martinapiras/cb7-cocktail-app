import "./index.css";
import { useState, useEffect } from "react";
import { GET } from "../../utils/HTTP";
import ProductListItem from "../ProductListItem";

const ProductList = ({ name, setProductSection }) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    GET("filter.php?i=" + name).then((data) => setListData(data.drinks));
  }, []);

  return (
    <div className="ProductList">
      <h2 className="ProductList__title">
        {name.charAt(0).toUpperCase()}
        {name.slice(1)} drinks
      </h2>
      <div className="ProductList__list">
        {listData.map((item) => (
          <ProductListItem
            data={item}
            setProductSection={setProductSection}
            key={item.idDrink}
          ></ProductListItem>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
