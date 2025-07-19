import React from 'react';
import { useNavigate } from 'react-router';

function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await fetch("http://localhost/BackendApis/Logout.php", {
            method: "GET",
            credentials: "include"  // Send cookies to destroy session
        });

        navigate("/Login"); // Redirect to login
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

export default LogoutButton;
