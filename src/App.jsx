import { useState } from "react";
import "./App.css";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductList";

function App() {
  const [productSection, setProductSection] = useState("");

  return (
    <>
      {productSection ? (
        <ProductSection
          productSection={productSection}
          setProductSection={setProductSection}
        ></ProductSection>
      ) : (
        <>
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
      )}
    </>
  );
}

export default App;
