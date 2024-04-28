import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";

const Cart = () => {
  return (
    <>
      <div className="flex justify-center">
        <button className="py-1 px-2 text-white rounded-sm hover:text-blue-700">
          <ShoppingCart size={32} weight="fill" />
        </button>
      </div>
    </>
  );
};

export default Cart;
