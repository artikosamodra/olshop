import Banner from "./component/Banner/Banner";
import Categorty from "./component/Category/Category";
import Recommended from "./component/Recomended/Recommended";
import Header from "./component/utils/Header";

const Home = () => {
  return (
    <main>
      <div className="pt-20">
        <div className="lg:px-20 md:px-5 pb-4">
          <Banner />
        </div>
        <div className="lg:px-20 md:px-5 pb-10">
          <Header nameHeader="Kategori Produk" urlLink="/" nameLink="" />
          <Categorty />
        </div>
        <div className="lg:px-20 md:px-5 pb-10">
          <Header
            nameHeader="Rekomendasi Produk"
            urlLink="pages/allproduct"
            nameLink="Lihat Semua Produk"
          />
          <Recommended />
        </div>
      </div>
    </main>
  );
};

export default Home;
