import axios from "axios";
import { useRouter } from "next/router";

export default function Orders({ order }) {
    const router = useRouter();
    const { nr } = router.query;

    let status;
    switch (order.status) {
        case 0:
            status = 'Received'
            break;
        case 1:
            status = 'Preparetion'
            break;
        case 2:
            status = 'On Road'
            break;
        case 3:
            status = 'Delivered'
            break;
        default:
            break;
    }


    if (nr !== order._id) {
        return (
            <div style={{ height: "100vh" }}>
                <h2 className="text-center">Order {nr} Unavailable</h2>
                <button onClick={() => router.push('/')}>--Home--</button>
            </div>
        )
    }
    else {
        return (
            <div style={{ height: "100vh" }}>
                <h2 className="text-center">Orders</h2>
                <div className="row flex-spaces">
                    <div className="sm-9 col">
                        <table>
                            <thead>
                                <tr>
                                    <th>Order Nr.</th>
                                    <th>Client</th>
                                    <th>Adresse</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{nr}</td>
                                    <td>{order.client}</td>
                                    <td>{order.address}</td>
                                    <td>
                                        <span className="text-secondary">{status}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.products.map((product) => (
                                    <tr key={product._id}>
                                        <td>{product.name}</td>
                                        <td>{product.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="sm-3 col">
                        <div className="card" style={{ width: '15rem' }}>
                            <div className="card-body">
                                <h4 className="card-title">Total Sum</h4>
                                <h5 className="card-subtitle">{order.amount} $</h5>
                                {order.payment === 0 ?
                                    <button className="btn-danger disabled">Open</button> :
                                    <button className="btn-success disabled">Payed</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export async function getServerSideProps({ params }) {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.nr}`);
    return {
        props: {
            order: res.data
        }
    };

}