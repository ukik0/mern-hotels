import './AuthPage.scss'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, fetchLogin} from "../../Redux/Slices/authSlice";
import {useNavigate} from "react-router-dom";

export function AuthPage() {
    const dispatch = useDispatch()
    const isAuth = !!useSelector(checkIsAuth)
    const navigate = useNavigate()

    const [values, setValues] = useState({username: '', password: ''});

    function onInputChange(e) {
        setValues({...values, [e.target.name]: e.target.value})
    }

    function handleClick() {
        dispatch(fetchLogin(values))
    }

    if (isAuth) navigate('/')

    return (
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    name={'username'}
                    placeholder="username"
                    id="username"
                    className="lInput"
                    onChange={onInputChange}/>
                <input
                    type="password"
                    name={'password'}
                    placeholder="password"
                    id="password"
                    className="lInput"
                    onChange={onInputChange}
                />
                <button className="lButton" onClick={handleClick}>
                    Login
                </button>

            </div>
        </div>
    )
}