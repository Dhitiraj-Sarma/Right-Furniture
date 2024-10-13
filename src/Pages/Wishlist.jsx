import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../slices/wishlistSlice";
function Wishlist() {
  const WishlistItems = useSelector((state) => state.wishlist.items);

  const dispatch = useDispatch();

  const handleRemoveitem = (id) => {
    dispatch(removeFromWishlist(id));
  };
  return (
    <div className="w-full flex-col h-full py-5 flex justify-center items-center">
      <h1 className="text-center text-xl font-bold py-3">My Wishlist</h1>
      <div className="w-11/12 py-3 min-h-[50vh]">
        <table className="w-full h-full">
          <thead className=" bg-gray-300">
            <tr className="font-bold">
              <th className="py-3">ID</th>
              <th className="py-3">Name</th>

              <th className="py-3">Price</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody className=" bg-gray-50">
            {WishlistItems.length > 0 ? (
              WishlistItems.map((item) => (
                <tr className="hover:bg-gray-300 text-center" key={item.id}>
                  <td className="py-3">{item.id}</td>
                  <td className="py-3">{item.name}</td>

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
                  The Wishlist is Empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wishlist;
