import { useState } from "react";
import { GET } from "../../utils/HTTP";
import ProductListItem from "../ProductListItem";
import SearchBar from "../SearchBar";
import "./index.css";

const SearchList = ({ searchValue, setProductSection }) => {
  const [listData, setListData] = useState([]);

  useState(() => {
    GET("search.php?s=" + searchValue).then((data) => setListData(data.drinks));
  }, []);

  return (
    <div className="SearchList">
      <h2 className="SearchList__Title">Search results for "{searchValue}"</h2>
      <div className="SearchList__list">
        {listData ? (
          listData.map((item) => (
            <ProductListItem
              data={item}
              setProductSection={setProductSection}
              key={item.idDrink}
            ></ProductListItem>
          ))
        ) : (
          <p className="SearchList__Error">No drinks found :&#40;</p>
        )}
      </div>
    </div>
  );
};

export default SearchList;
