import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopCategories from "./components/TopCategories"
import ExploreStyles from "./components/ExploreStyles"
import OurProducts from "./components/OurProducts";
import Hero from "./components/Hero";


export default function Home () {
  return(
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
      <Hero/>
        <FeaturedProducts />
        <TopCategories />
        <ExploreStyles/>
        <OurProducts />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
