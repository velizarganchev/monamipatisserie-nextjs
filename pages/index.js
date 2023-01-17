import Header from "../components/Header"
import ProductList from "../components/ProductList"
import Product from "../models/Product";
import mongodb from "../utils/mongodb"

export default function Home({products}) {
  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  )
}

export async function getServerSideProps() {
  await mongodb.dbConnect();
  const products = await Product.find({}).lean();

  return ({
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  });
}