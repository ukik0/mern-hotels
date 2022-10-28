import cl from './Navbar.module.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../Redux/Slices/authSlice";

export function Navbar() {
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    function logoutClick() {
        dispatch(logout())
        localStorage.removeItem('user')
    }

    return (
        <div className={cl.navbar}>
            <div className={cl.container}>
                <Link to={'/'} className={cl.logo}>Hotels</Link>

                {!user ? <div className={cl.nav__items}>
                    <button className={cl.nav__items__button}>
                        register
                    </button>
                    <button className={cl.nav__items__button}>
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