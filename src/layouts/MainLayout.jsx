import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="font-Poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav>
        <Navbar/>
      </nav>
      <main></main>
    </div>
  );
};

export default MainLayout;
