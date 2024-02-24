import { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/login';
import MainContent from './pages/mainContent';
import { authenticateToken } from './services/authentication';
import Loading from './pages/loading';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        authenticateToken()
            .then((isValid) => {
                setIsLoggedIn(isValid);
            })
            .catch(() => {})
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    return <>{isLoading ? <Loading /> : <>{isLoggedIn ? <MainContent /> : <Login />}</>}</>;
}

export default App;
