import Card from "../components/Card";
import products from "../data/products.json";

export default function Product() {
  const productsData = products;
  console.log(productsData);

  return (
    <div className="px-32 mt-14">
      Product
      <div className="flex flex-wrap gap-4">
        {productsData.map((product) => {
          return <Card name={product.name} desc={product.desc} />;
        })}
      </div>
    </div>
  );
}
