import NavBar from "./components/NavBar";
import Shoe from "./components/Shoe";
import SelectMenu from "./components/SelectMenu";
import ProductDisplay from "./components/ProductsDisplay";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Shoe />
      <SelectMenu />
      <ProductDisplay />
      <FooterSection />
    </>
  );
};

export default App;
