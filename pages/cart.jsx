import Image from "next/image"
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux"
import { removeProduct, toEmpty } from "../redux/cartSlice";
import { useEffect } from "react";
import { useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";

export default function Cart() {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const clientID = 'AXsPts9ZKu9TWlqn0uMo8n2YVQgCJxB9UGdattY3m5hdIksOFb1pT0KIIlI85Lpckm9UX_T7A0cac6u4';
  const [kasse, setKasse] = useState(false);
  const router = useRouter();

  const remove = (product) => {
    dispatch(removeProduct(product));
  }

  const amount = cart.totalSum.toFixed(2);
  const currency = "USD";
  const style = {
    "layout": "vertical",
    "color": "silver",
    "height": 30
  };

  const createOrder = async (data) => {
    try {
      const res = await axios.post("https://monamipatisserie-nextjs.vercel.app/api/orders", data);
      if (res.status === 201) {
        dispatch(toEmpty());

        router.push(`/orders/${res.data._id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (<>
      {(showSpinner && isPending) && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (details) {
            const client = details.purchase_units[0].shipping;
            createOrder({
              client: client.name.full_name,
              address: client.address.address_line_1 + ", " + client.address.admin_area_2,
              amount: cart.totalSum,
              status: 0,
              payment: 1,
              products: cart.products.map((product) => (
                {
                  name: product.name,
                  quantity: product.quantity
                }
              )),
            });
          });
        }}
      />
    </>
    );
  }

  return (
    <div style={{ height: "100vh" }} >
      {cart.cQuantity === 0 ?
        (<h2 className="text-center">Cart is Empty!</h2>) :
        (<div>
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
                    <th><label className="btn-close">X</label></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.products.map((product) => (
                      <tr key={product._id}>
                        <td><Image src={product.image} alt={product.name} width={50} height={50}></Image></td>
                        <td><Link href={`/product/${product.url}`} style={{ background: "none", color: "#880808" }}>
                          {product.name}
                        </Link></td>
                        <td>{product.quantity}</td>
                        <td>{(product.price * product.quantity).toFixed(2)} $</td>
                        <td><button className="btn-danger btn-small" onClick={() => remove(product)} style={{ padding: "0.2rem" }}>x</button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className="sm-3 col">
              <div className="card" style={{ width: '15rem' }}>
                <div className="card-body">
                  <h3 className="card-title">Total Sum</h3>
                  <h4 className="card-subtitle">{cart.totalSum.toFixed(2)}</h4>
                  {kasse ?
                    <PayPalScriptProvider
                      options={{
                        "client-id": clientID,
                        components: "buttons",
                        currency: "USD"
                      }}
                    >
                      <ButtonWrapper
                        currency={currency}
                        showSpinner={false}
                      />
                    </PayPalScriptProvider> :
                    <button className="btn-success" onClick={() => setKasse(true)}>Checkout</button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </div>
  )
}
