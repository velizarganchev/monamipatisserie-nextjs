import Link from "next/link";
import Image from "next/image";
import mongodb from "../../utils/mongodb";
import Product from "../../models/Product";
import { useState } from "react";

export default function Productpage({ product }) {

  const [quantity, setQuantity] = useState(1);
  console.log(quantity)
  if (!product) {
    return (
      <div>
        <h2>Product not find!</h2>
      </div>
    )
  }
  return (
    <div className='margin-top-large' style={{ height: "100vh" }}>
      <div className='margin padding'>
        <Link href='/' className='text-dark' style={{ background: "none" }}>--Home--</Link>
      </div>
      <div className='row flex-spaces'>
        <div className='sm-4 col'>
          <Image src={product.image} alt={product.name} width={400} height={300}></Image>
        </div>
        <div className='sm-4 col'>
          <h3>{product.name}</h3>
          <h4 className='text-danger margin-small'>{product.price}</h4>
          <p>{product.description}</p>
          <div className="col col-3 padding-none">
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                className="input-block"
                type="number"
                placeholder='1'
                defaultValue={quantity}
                min=''
                max={100}
                id="quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10 col">
              <button className="btn-block background-success">Add to Cart</button>
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