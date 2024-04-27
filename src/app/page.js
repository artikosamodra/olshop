import Banner from "./component/Banner/Banner";
import Recommended from "./component/Recomended/Recommended";
import Header from "./component/utils/Header";

export default function Home() {
  return (
    <main>
      <div className="pt-20">
        <div className="lg:px-20 md:px-5 pb-4">
          <Banner />
        </div>
        <div className="lg:px-20 md:px-5">
          <Header nameHeader="Rekomendasi Produk" />
          <Recommended />
        </div>
      </div>
    </main>
  );
}
