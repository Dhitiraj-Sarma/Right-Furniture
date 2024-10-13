import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateCart } from "../slices/cartSlice";
function Cart() {
  const CartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const handleRemoveitem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value, 10);

    dispatch(updateCart({ id, quantity: newQuantity }));
  };

  return (
    <div className="w-full flex-col h-full py-5 flex justify-center items-center">
      <h1 className="text-center text-xl font-bold py-3">My Cart</h1>
      <div className="w-11/12 py-3 min-h-[50vh]">
        <table className="w-full h-full">
          <thead className=" bg-gray-300">
            <tr className="font-bold">
              <th className="py-3">ID</th>
              <th className="py-3">Name</th>
              <th className="py-3">Quantity</th>
              <th className="py-3">Price</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody className=" bg-gray-50">
            {CartItems.length > 0 ? (
              CartItems.map((item) => (
                <tr className="hover:bg-gray-300 text-center" key={item.id}>
                  <td className="py-3 text-sm">{item.id}</td>
                  <td className="py-3 text-sm">{item.name}</td>
                  <td className="py-3 text-sm">
                    <input
                      type="number"
                      className="focus:outline-none focus:border-none w-20 bg-gray-50 px-2 py-3"
                      onChange={(e) => handleQuantityChange(item.id, e)}
                      value={item.quantity}
                    />
                  </td>
                  <td className="py-3">$ {item.price}</td>
                  <td className="py-3">
                    <button
                      onClick={() => handleRemoveitem(item.id)}
                      className="text-red-500"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-[#f4ede4] text-center">
                <td colSpan={5} className="py-5 text-xl">
                  The Cart is Empty
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className="bg-[#f4ede4] w-full">
            <tr className="w-full">
              <td className="p-3" colSpan={2}>
                Total Quantity : {totalQuantity}
              </td>
              <td className="p-3 text-right" colSpan={3}>
                Total Amount : $ {totalAmount.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-end py-4 px-4">
          {CartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="text-red-500 flex justify-center items-center gap-3 border border-gray-400 rounded-sm py-3 px-3 bg-white hover:font-bold"
            >
              Empty Cart <FaRegTrashAlt />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
