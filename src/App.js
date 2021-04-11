import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main";

function App() {
    const handleClick = () => {
        document.querySelector(".search_active").style.display = "none"
        document.querySelector("#inp").value = ''
    }
    return (
        <div className="App" onClick={handleClick}>
            <Main/>
        </div>
    );
}

export default App;
