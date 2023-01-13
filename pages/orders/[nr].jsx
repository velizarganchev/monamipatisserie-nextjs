import Image from "next/image";
import { useRouter } from "next/router";

export default function Orders() {
    const router = useRouter();
    const { nr } = router.query;

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
                                <td>Velizar</td>
                                <td>Erwitte</td>
                                <td>
                                    <span>Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <td>{nr}</td>
                                <td>Velizar</td>
                                <td>Erwitte</td>
                                <td>
                                    <span>Pending</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="sm-3 col">
                    <div class="card" style={{ width: '15rem' }}>
                        <div class="card-body">
                            <h4 class="card-title">Total Sum</h4>
                            <h5 class="card-subtitle">20.99 $</h5>
                            <button className="btn-success disabled">payed</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
