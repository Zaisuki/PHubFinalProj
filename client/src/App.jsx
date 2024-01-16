import './App.css';
import Login from './pages/login';
import MainContent from './pages/mainContent';

function App() {
    return <>{window.location.pathname != '/login' ? <MainContent /> : <Login />}</>;
}

export default App;
