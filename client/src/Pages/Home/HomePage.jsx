import {Navbar} from "../../Components/Navbar/Navbar";
import {Header} from "../../Components/Header/Header";
import {Featured} from "../../Components/Featured/Featured";
import cl from './HomePage.module.scss'
import {PropertyList} from "../../Components/PropertyList/PropertyList";
import {FeaturedProperties} from "../../Components/FeaturedProperties/FeaturedProperties";
import {EmailList} from "../../Components/EmailList/EmailList";
import {Footer} from "../../Components/Footer/Footer";

export function HomePage() {
    return (
        <>
            <Navbar/>
            <Header/>
            <div className={cl.container}>
                <Featured/>
                <h1 className={cl.home__title}>
                    Browse by property type
                </h1>
                <PropertyList/>
                <h2 className={cl.home__title}>Homes guests love</h2>
                <FeaturedProperties/>
                <EmailList/>
                <Footer/>
            </div>
        </>
    )
}