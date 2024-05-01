import Banner from "./component/Banner/Banner";
import Categorty from "./component/Category.jsx/Category";
import Recommended from "./component/Recomended/Recommended";
import Header from "./component/utils/Header";

// import fetchAllProducts from "./libs/useFetch";

const Home = () => {
  return (
    <main>
      <div className="pt-20">
        {/* <div className="lg:px-20 md:px-5 pb-4">
          <Banner />
        </div>
        <div className="lg:px-20 md:px-5 pb-10">
          <Header nameHeader="Kategory Produk" />
          <Categorty />
        </div> */}
        <div className="lg:px-20 md:px-5 pb-10">
          <Header nameHeader="Rekomendasi Produk" />
          <Recommended />
        </div>
      </div>
    </main>
  );
};

export default Home;
