import "./index.css";

const ProductListItem = ({ data, setProductSection }) => {
  const onHandleClick = () => setProductSection(data.strDrink);

  return (
    <li className="ProductListItem" onClick={onHandleClick}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <p className="ProductListItem__name">{data.strDrink}</p>
    </li>
  );
};

export default ProductListItem;
