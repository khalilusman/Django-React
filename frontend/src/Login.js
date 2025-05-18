import { useState, useContext } from 'react';
import { AuthProvider } from './AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser } = useContext(AuthProvider);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
