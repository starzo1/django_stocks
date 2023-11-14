import axios from "axios";
import { useState } from "react";// Define the Login function.
import '../styles/SignUp.css';



export const SignUp = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const submit = async e => {
        e.preventDefault();
        // Check if password and confirm password match
        if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
        }
        // Check if email is valid
        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        alert('Invalid email address');
        return;
        }
        // Create the user object
        const user = {
        username: username,
        email: email,
        password: password
        };
        // Create the POST request
        try {
        const { data } = await axios.post('http://localhost:8000/users/', user, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        console.log(data);
        alert('User created successfully');
        window.location.href = '/login';
        } catch (error) {
        console.error(error);
        alert('User creation failed');
        }
    }
    return (
        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={submit}>
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group mt-3">
                <label>Username</label>
                <input
                className="form-control mt-1"
                placeholder="Enter your name"
                name="name"
                type="text"
                value={username}
                required
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group mt-3">
                <label>Email</label>
                <input
                className="form-control mt-1"
                placeholder="Enter your email"
                name="email"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Enter your password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group mt-3">
                <label>Confirm Password</label>
                <input
                name="confirmPassword"
                type="password"
                className="form-control mt-1"
                placeholder="Confirm your password"
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </div>
            </div>
        </form>
        </div>
    )
}