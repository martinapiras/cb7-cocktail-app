import { useState } from "react";
import "./App.css";
import ProductSection from "./components/ProductSection";

function App() {
  const [productSection, setProductSection] = useState("");

  return (
    <>
      <ProductSection
        productSection={productSection}
        setProductSection={setProductSection}
      ></ProductSection>
    </>
  );
}

export default App;
