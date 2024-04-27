import Recommended from "./component/Recomended/Recommended";
import Header from "./component/utils/Header";

export default function Home() {
  return (
    <main>
      <div className="pt-20">
        <div className="px-40">
        <Header nameHeader="Rekomendasi Produk" />
          <Recommended />
        </div>
      </div>
    </main>
  );
}
