import { useState } from "react";
import "./index.css";

const Filters = ({ categoryList, setCategoryList }) => {
  const [filterList, setFilterList] = useState(categoryList);

  const onHandleCheck = (id) => {
    setFilterList((prev) =>
      prev.map((category) => {
        let newCategory = category;
        if (category.id === id) {
          newCategory = { ...category, checked: !category.checked };
        }

        return newCategory;
      })
    );
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setCategoryList(filterList.filter((category) => category.checked === true));
  };

  return (
    <form className="Filters" onSubmit={onHandleSubmit}>
      {filterList.map((category) => (
        <div className="Filters__checkbox" key={category.id}>
          <label htmlFor={category.name}>{category.name}</label>
          <input
            type="checkbox"
            name={category.name}
            onChange={() => onHandleCheck(category.id)}
            checked={category.checked}
          />
        </div>
      ))}
      <input type="submit" value="Filter" />
    </form>
  );
};

export default Filters;
