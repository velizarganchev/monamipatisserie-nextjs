import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Orders({ orders }) {
    const router = useRouter();

    const status = ["Received", "Preparetion", "On Road", "Delivered"];

    const statusUpdate = async (id, actuelStatus) => {
        try {
            if (actuelStatus <= 2) {
                await axios.put(`http://localhost:3000/api/orders/` + id, { status: actuelStatus + 1 });
                router.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }
    const removeOrder = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/orders/` + id);
            router.reload();
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div style={{ height: "100vh" }} className="section">
            <h2 className="text-center">Admin Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order Nr.</th>
                        <th>Client</th>
                        <th>Adresse</th>
                        <th>Status</th>
                        <th><label className="btn-close">X</label></th>
                    </tr>
                </thead>
                {orders.map((order) => (
                    <tbody key={order._id}>
                        <tr>
                            <td><Link href={`/orders/${order._id}`} style={{ background: "none", color: "red"}}>{order._id}</Link></td>
                            <td>{order.client}</td>
                            <td>{order.address}</td>
                            <td>
                                <button className="btn-small btn-warning" onClick={() => statusUpdate(order._id, order.status)}>{status[order.status]}</button>
                            </td>
                            <td>
                                <button className="btn-danger btn-small" onClick={() => removeOrder(order._id)} style={{ padding: "0.2rem" }}>x</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await axios.get(`http://localhost:3000/api/orders`);
    return {
        props: {
            orders: res.data
        }
    };

}