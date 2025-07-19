import React, { useState } from 'react';
import { Link } from 'react-router';
import "../App.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    profile: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost/BackendApis/Register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          profile_password: formData.profile
        })
      });

      const data = await res.text();
      alert(data);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Registration Form</h4>
        <table border="0" style={{ borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td><label htmlFor="name">Full Name</label></td>
              <td><input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email</label></td>
              <td><input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="phone">Phone</label></td>
              <td><input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="password">Password</label></td>
              <td><input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="confirm">Confirm Password</label></td>
              <td><input type="password" name="confirm" id="confirm" value={formData.confirm} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="profile">Profile Password</label></td>
              <td><input type="password" name="profile" id="profile" value={formData.profile} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                <input type="submit" value="Register" /> <br /><br />
                <Link to="/Login">Login</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Register;
