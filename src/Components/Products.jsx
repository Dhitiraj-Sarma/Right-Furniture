function Products({ product }) {
  return (
    <div className="w-11/12">
      <img src={product.images[0]} />
    </div>
  );
}

export default Products;
