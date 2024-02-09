import './App.css';
import Login from './pages/login';
import MainContent from './pages/mainContent';


function App() {
    return <>{window.location.pathname != '/login' ? <MainContent /> : <Login />}
    
    <link href="https://fonts.googleapis.com/css?family=Protest+Riot:regular" rel="stylesheet" /><link href="https://fonts.googleapis.com/css?family=Antonio:100,200,300,regular,500,600,700" rel="stylesheet" />ty<link href="https://fonts.googleapis.com/css?family=DM+Sans:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" /><link href="https://fonts.googleapis.com/css?family=Oswald:200,300,regular,500,600,700" rel="stylesheet" />
    </>;

    
}

export default App;
