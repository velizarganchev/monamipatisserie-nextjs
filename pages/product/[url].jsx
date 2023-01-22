import Link from "next/link";
import Image from "next/image";
import mongodb from "../../utils/mongodb";
import Product from "../../models/Product";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../../redux/cartSlice";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function Productpage({ product }) {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const router = useRouter();

  const addToCart = () => {
    const _id = uuidv4();
    dispatch(addProducts({ ...product, quantity, _id }));
    router.push('/cart');
  }

  if (!product) {
    return (
      <div className="text-center" style={{ height: "100vh" }}>
        <h2>Product not find!</h2>
      </div>
    )
  }
  return (
    <div className='margin-top-large' >
      <div className='margin padding'>
        <Link href='/' className='text-dark' style={{ background: "none" }}>--Home--</Link>
      </div>
      <div className='row flex-spaces'>
        <div className='sm-4 col'>
          <Image src={product.image} alt={product.name} width={400} height={300}></Image>
        </div>
        <div className='sm-4 col'>
          <h3>{product.name}</h3>
          <h4 className='text-danger margin-small'>{product.price.toFixed(2)} $</h4>
          <p>{product.description}</p>
          <div className="col col-3 padding-none">
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                className="input-block"
                type="number" value={quantity} min='1' max='100' id="quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10 col">
              <button className="btn-block background-success" onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const url = context.params.url;
  await mongodb.dbConnect();
  const product = await Product.findOne({ url }).lean();

  return ({
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  });
}