import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import FilterSection from "./components/FilterSection"
import ProductsDisplay from "./components/ProductsDisplay"
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Hero />
      <FilterSection />
      <ProductsDisplay />
      <Footer />
    </div>
  )
}
export default App;
;   