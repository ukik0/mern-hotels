import cl from './EmailList.module.scss'

export function EmailList() {
    return (
        <div className={cl.mail}>
            <h1 className={cl.mail__title}>Save time, save money!</h1>

            <span className={cl.mail__desc}> Sign up</span>

            <div className={cl.mail__container}>
                <input type="text" placeholder={'Your email'}/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}