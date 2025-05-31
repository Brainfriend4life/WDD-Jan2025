import './App.css'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <section id="home">
          <h1>Welcome to Our Website</h1>
          <p>This is the home section.</p>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>This is the about section.</p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <p>This is the services section.</p>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>This is the contact section.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        <p>Follow us on social media:</p>
      </footer>
      <NavBar />

    </>
  )
}

export default App