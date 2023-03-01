import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
import { Helmet } from "react-helmet";
import './App.css'
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Cappa Luxury Hotel</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/429/429192.png" />
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
