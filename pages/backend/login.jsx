import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Login() {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const login = async () => {
        try {
            await axios.post("http://localhost:3000/api/login", {
                user,
                password
            });
            router.push("/backend");
        } catch (error) {
            setError(true);
        }
    }
    return (
        <div style={{ height: "100vh" }}>
            <h1 className='text-center'>Login</h1>
            {error && <p className='text-danger'>Login Failed</p>}
            <div className="row">
                <div className="col sm-4">
                    <div className="form-group">
                        <label htmlFor="user">User</label>
                        <input
                            className="input-block"
                            type="text" id="user"
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col sm-4">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            className="input-block"
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button onClick={login} className='paper-btn btn-primary-outline'>Login</button>
            </div>
        </div>
    )
}
