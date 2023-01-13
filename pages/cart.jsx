import Image from "next/image";

export default function Cart() {
  return (
    <div style={{ height: "100vh" }} >
      <h2 className="text-center">Cart</h2>
      <div className="row flex-spaces">
        <div className="sm-9 col">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Sum</th>
                <th><label class="btn-close">X</label></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Image src={'/images/products/pexels-cake.jpg'} alt='product-img' width={50} height={50}></Image></td>
                <td>Cake</td>
                <td>1</td>
                <td>20.99 $</td>
                <td><button class="btn-danger btn-small" style={{ padding: "0.2rem" }}>x</button></td>
              </tr>
              <tr>
                <td><Image src={'/images/products/pexels-cake.jpg'} alt='product-img' width={50} height={50}></Image></td>
                <td>Cake</td>
                <td>1</td>
                <td>20.99 $</td>
                <td><button class="btn-danger btn-small" style={{ padding: "0.2rem" }}>x</button></td>
              </tr>
              <tr>
                <td><Image src={'/images/products/pexels-cake.jpg'} alt='product-img' width={50} height={50}></Image></td>
                <td>Cake</td>
                <td>1</td>
                <td>20.99 $</td>
                <td><button class="btn-danger btn-small" style={{ padding: "0.2rem" }}>x</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sm-3 col">
          <div class="card" style={{ width: '15rem' }}>
            <div class="card-body">
              <h3 class="card-title">Total Sum</h3>
              <h4 class="card-subtitle">20.99 $</h4>
              <button className="btn-success">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
