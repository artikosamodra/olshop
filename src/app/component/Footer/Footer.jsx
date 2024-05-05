import FMenu from "./FooterMenu";
import Socmed from "./Socmed";

const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 py-10 lg:px-20 md:px-5 bg-orange-500 text-white pb-10">
        <div className="flex gap-10 md:px-0 px-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold pb-2">Menu Utama</h1>
            <FMenu linkF="/" subMenu="Halaman Utama" />
            <FMenu linkF="/" subMenu="Kategori Produk" />
            <FMenu linkF="/" subMenu="Rekomendasi Produk" />
            <FMenu linkF="/" subMenu="Semua Produk" />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold pb-2">Hubungi Kami</h1>
            <FMenu linkF="/" subMenu="Call Center" />
            <FMenu linkF="/" subMenu="Email" />
            <FMenu linkF="/" subMenu="Instagram" />
            <FMenu linkF="/" subMenu="Telegram" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold pb-2">Informasi Kami</h1>
            <FMenu linkF="/" subMenu="Tentang Kami" />
            <FMenu linkF="/" subMenu="Produk Kami" />
            <FMenu linkF="/" subMenu="Kebijakan Privasi" />
            <FMenu linkF="/" subMenu="Blog" />
          </div>
        </div>
        <div className="md:px-0 px-4">
          <h1 className="text-2xl font-bold text-center pb-5">Social Media</h1>
          <Socmed />
        </div>
      </div>
      <div className="pt-5 lg:pb-5 pb-16 lg:px-20 md:px-5 flex items-center bg-stone-900 text-white font-bold">
        <h1 className="md:px-0 px-4">Create by Artiko</h1>
      </div>
    </>
  );
};

export default Footer;
