import { useState } from "react";
import "./App.css";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductList";
import Contacts from "./components/Contacts";
import SearchBar from "./components/SearchBar";
import SearchList from "./components/SearchList";

function App() {
  const [productSection, setProductSection] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return <Contacts />;

      case "":
        return (
          <>
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setProductSection={setProductSection}
            />
            <ProductList
              name="rum"
              setProductSection={setProductSection}
            ></ProductList>
            <ProductList
              name="vodka"
              setProductSection={setProductSection}
            ></ProductList>
            <ProductList
              name="gin"
              setProductSection={setProductSection}
            ></ProductList>
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
