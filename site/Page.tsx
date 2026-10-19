import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Functions from "./components/Functions";
import Rounds from "./components/Rounds";
import Details from "./components/Details";
import Craft from "./components/Craft";
import Portfolio from "./components/Portfolio";
import Packages from "./components/Packages";
import Album from "./components/Album";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="mn">
      <Nav />
      <Hero />
      <Functions />
      <Rounds />
      <Details />
      <Craft />
      <Portfolio />
      <Packages />
      <Album />
      <Reviews />
      <Booking />
      <Footer />
    </main>
  );
}
