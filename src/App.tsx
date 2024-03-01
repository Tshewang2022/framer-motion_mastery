import { Home, Rent, Properties, ContactUs, Parallax } from "./_roots/pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />

      <Properties />
      <Rent />
      <Parallax />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
