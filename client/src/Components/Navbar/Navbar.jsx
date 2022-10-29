import cl from './Navbar.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkUser, logout} from "../../Redux/Slices/authSlice";

export function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector(checkUser)

    function logoutClick() {
        dispatch(logout())
        localStorage.removeItem('user')
    }

    return (
        <div className={cl.navbar}>
            <div className={cl.container}>
                <Link to={'/'} className={cl.logo}>Hotels</Link>

                {!user ? <div className={cl.nav__items}>
                    <button onClick={() => navigate('/register')} className={cl.nav__items__button}>
                        register
                    </button>
                    <button onClick={() => navigate('/login')} className={cl.nav__items__button}>
                        login
                    </button>
                </div> : <>
                    <span>{user.username}
                        <button onClick={logoutClick}>Logout</button>
                    </span>

                </>}

            </div>
        </div>
    )
}