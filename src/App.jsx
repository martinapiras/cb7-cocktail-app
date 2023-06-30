import { useState } from "react";
import "./App.css";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductList";
import Contacts from "./components/Contacts";
import SearchBar from "./components/SearchBar";
import SearchList from "./components/SearchList";
import Filters from "./components/Filters";

function App() {
  const [productSection, setProductSection] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [categoryList, setCategoryList] = useState([
    { name: "rum", id: 1, checked: true },
    { name: "vodka", id: 2, checked: true },
    { name: "gin", id: 3, checked: true },
    { name: "whiskey", id: 4, checked: true },
  ]);

  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return <Contacts />;

      case "":
        return (
          <>
            <Filters
              categoryList={categoryList}
              setCategoryList={setCategoryList}
            />
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setProductSection={setProductSection}
            />
            {categoryList.map((category) => (
              <ProductList
                name={category.name}
                setProductSection={setProductSection}
                key={category.id}
              />
            ))}
          </>
        );

      case "searchList":
        return (
          <SearchList
            searchValue={searchValue}
            setProductSection={setProductSection}
          />
        );

      default:
        return (
          <ProductSection
            productSection={productSection}
            setProductSection={setProductSection}
          ></ProductSection>
        );
    }
  };

  return (
    <>
      <ul className="Navbar">
        <li onClick={() => setProductSection("")}>Home</li>
        <li onClick={() => setProductSection("contacts")}>Contacts</li>
      </ul>
      {onRender()}
    </>
  );
}

export default App;
