import cl from './Navbar.module.scss'

export function Navbar() {
    return (
        <div className={cl.navbar}>
            <div className={cl.container}>
                <span className={cl.logo}>hotels</span>

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