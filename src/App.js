import './App.css';
import LoginPage from './loginPage'
import {useState} from "react";
import MainPage from './mainPage'
import Files from './Files'
function App() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [login, setLogin] = useState(0)
    const [name, setName] = useState('')
    return (
    <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
              integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
              crossOrigin="anonymous" referrerpolicy="no-referrer"/>
        { login === 0 &&
            <LoginPage islogged={setLogin} sendname={setName}/>
        }
        {
            login === 1 &&
            <MainPage username={name} wheregoing={setLogin}/>
        }
        {
            login === 2 &&
            <Files turnback={setLogin} username={name}/>
        }
    </div>
  );
}

export default App;
