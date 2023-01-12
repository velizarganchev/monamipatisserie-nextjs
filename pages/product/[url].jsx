import { useRouter } from "next/router"
import jsondb from "../../jsondb/products";
import Link from "next/link";
import Image from "next/image";

export default function Productpage() {
  const router = useRouter();
  const { url } = router.query;
  const product = jsondb.products.find((p) => p.url === url);

  if (!product) {
    return (
      <div>
        <h2>Product not find!</h2>
      </div>
    )
  }
  return (
    <div className='margin-top-large'>
      <div className='margin padding'>
        <Link href='/' className='text-dark' style={{ background: "none", color: "#41403e" }}>to Home</Link>
      </div>
      <div className='row flex-spaces'>
        <div className='sm-4 col'>
          <Image src={product.image} alt={product.name} width={300} height={300}></Image>
        </div>
        <div className='sm-4 col'>
          <h3>{product.name}</h3>
          <h4 className='text-danger margin-small'>{product.price}</h4>
          <p>{product.description}</p>
          <div className="col col-3 padding-none">
            <div className="form-group">
              <label htmlFor="paperInputs2">Quantity</label>
              <input className="input-block" type="number" placeholder='1' id="paperInputs2" />
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
