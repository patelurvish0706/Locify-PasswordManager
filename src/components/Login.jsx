import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost/BackendApis/Login.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    profile_password: profile
                })
            });

            const result = await response.json();
            setMessage(result.message);

            if (result.message === "Login successful.") {
                navigate("/Home"); 
                // or whatever your homepage route is
            }

        } catch (error) {
            setMessage("Error: " + error.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h4>Login Form</h4>
            <table border="0" style={{ borderCollapse: "collapse" }}>
                <tbody>
                    <tr>
                        <td><label htmlFor="email">Email</label></td>
                        <td>
                            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="password">Password</label></td>
                        <td>
                            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="profile">Profile Password</label></td>
                        <td>
                            <input type="password" id="profile" value={profile} onChange={e => setProfile(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={6} style={{ textAlign: "center" }}>
                            <input type="submit" value="Login" /> <br /><br />
                            <Link to="/Register">Register</Link>
                        </td>
                    </tr>
                </tbody>
            </table>

            {message && <p><strong>{message}</strong></p>}
        </form>
    );
}

export default Login;
