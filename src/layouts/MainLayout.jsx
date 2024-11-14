import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import MainNews from "../components/MainNews";
import Navbar from "../components/Navbar";
import RightSide from "../components/RightSide";
import Sidebar from "../components/LeftSidebar";

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
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto md:grid grid-cols-12 gap-4">
        <section className="col-span-3">
          <Sidebar />
        </section>
        <section className="col-span-6">
          <MainNews />
        </section>
        <section className="col-span-3">
          <RightSide />
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
