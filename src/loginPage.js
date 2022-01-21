import axios from "axios";
import {useState} from "react";

function loginPage(props){

    let username = '',
        password = '';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false)
    function login(){
        setLoading(true);
        if(username.length < 5){
             alert('username must be at least 5 characters');
             return window.location.href = '/';
        }
        else if(password.length < 8){
            alert('password must be at least 8 characters');
            return window.location.href = '/';
        }
        axios.post('https://yefee-cloud-backend.herokuapp.com', {user: {
                username,
                password
            }}).then(r => {
            if(r.data === 'new user!'){
                alert('acount created');
                props.islogged(1);
                props.sendname(username);
                return setLoading(false);
            }

            else if(r.data === 'password wrong'){
                alert('password wrong and this username already taken!');
                window.location.href = '/'
                return setLoading(false);
            }

            else if(r.data === 'login'){
                alert('Logging');
                props.islogged(1);
                props.sendname(username);
                return setLoading(false);
            }

            else{
                alert('Website have an error please contact with @Yefee8');
                return setLoading(false);
            }
        })
    }


    return (
        <div className="App">
            {
                loading &&
                <div className="loading">
                    <div className="spin"></div>
                </div>
            }
            <div className="login">
                <h1>Login/Register</h1>
                <div className="inputs">
                    <i className="fas fa-user"></i>
                    <input type="text" onChange={(e) => username = e.target.value} placeholder="Username" maxLength="15"/>
                </div>
                <div className="inputs">
                    <i className="fas fa-lock"></i>
                    <input type="Password" placeholder="Password" onChange={(e) => password = e.target.value} maxLength="18"/>
                </div>
                <button onClick={() => login()}>Login/Register</button>
            </div>
        </div>
    );
}

export default loginPage;