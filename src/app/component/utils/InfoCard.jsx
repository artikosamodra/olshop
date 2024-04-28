const InfoCard = () => {
  return (
    <>
      <div className="bg-stone-100 px-10 py-4">
        <div className="px-2">Nama Produk</div>
        <div className="flex gap-10 px-2">
          <div>Rating</div>
          <div>Terjual</div>
        </div>
        <div>
          <table>
            <tr>
              <td>Kategori</td>
              <td>: XXXXX</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>: XXXXX</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>: XXXXX</td>
            </tr>
          </table>
        </div>
        <div className="flex gap-10 px-2">
          <div>Price</div>
          <div>Diskon</div>
        </div>
        <div>
          <button>-</button> Number <button>+</button>
        </div>
        <div className="flex gap-10 px-2">
          <div>Chat</div>
          <div>Beli</div>
          <div>Keranjang</div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
