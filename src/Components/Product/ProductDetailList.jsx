import { useParams } from "react-router-dom";

import { products } from "./products";

function ProductDetailList() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === Number(productId));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="w-full h-full">
      <div className="w-11/12 flex justify-center items-start gap-5 py-5 px-4">
        <div className="flex-1">
          <img src={product.images[0]} />
        </div>
        <div className="flex flex-1 flex-col justify-center items-center gap-9">
          <div className="flex justify-center items-center flex-col gap-5">
            <h1 className="text-3xl font-bold py-2">{product.name}</h1>
            <p className="text-lg font-semibold text-center w-5/6">
              {product.description}
            </p>
            <p className="text-xl text-lime-700 font-bold">$ {product.price}</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold py-4">Customer Reviews</h1>
            <div>
              {product.reviews.map((review, index) => (
                <div key={index} className="review">
                  <p className="py-3 text-lg">
                    <strong>{review.user}</strong> rated it {review.rating}/5
                  </p>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailList;

{
  /* <Link to={`/product/${product.id}`} className="text-blue-500">
View Details
</Link> */
}
