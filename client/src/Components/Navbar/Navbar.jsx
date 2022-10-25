import cl from './Navbar.module.scss'
import {Link} from "react-router-dom";

export function Navbar() {

    return (
        <div className={cl.navbar}>
            <div className={cl.container}>
                <Link to={'/'} className={cl.logo}>Hotels</Link>

                <div className={cl.nav__items}>
                    <button className={cl.nav__items__button}>
                        register
                    </button>
                    <button className={cl.nav__items__button}>
                        login
                    </button>
                </div>

            </div>
        </div>
    )
}