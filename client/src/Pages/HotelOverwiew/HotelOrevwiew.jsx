import cl from './HotelOwerview.module.scss'
import {Navbar} from "../../Components/Navbar/Navbar";
import {Header} from "../../Components/Header/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {Footer} from "../../Components/Footer/Footer";
import {EmailList} from "../../Components/EmailList/EmailList";
import {useState} from "react";
import {useParams} from "react-router-dom";
import useFetch from "../../Hooks/useFetching";


export function HotelOrevwiew() {
    const {id} = useParams()

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const {data, loading} = useFetch(`/hotels/hotel/${id}`)

    const handleOpen = (idx) => {
        setOpen(true)
        setSlideNumber(idx)
    }

    const handleMove = (direction) => {
        let newSlider

        if (direction === 'l') {
            newSlider = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlider = slideNumber === 5 ? 0 : slideNumber + 1
        }

        setSlideNumber(newSlider)
    }

    return (<>
        <Navbar/>
        <Header/>
        <div className={cl.hotel__container}>
            {loading ? <h1>Loading</h1> :

                <>
                    {open && (<div className={cl.slider}>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className={cl.close}
                            onClick={() => setOpen(false)}
                        />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className={cl.arrow}
                            onClick={() => handleMove('l')}
                        />
                        <div className={cl.slider__wrapper}>
                            <img src={data.photos[slideNumber]} alt="" className="sliderImg"/>
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className={cl.arrow}
                            onClick={() => handleMove('r')}
                        />
                    </div>)}
                    <div className={cl.hotel__wrapper}>
                        <button className={cl.btn}>Reserve or Book Now!</button>
                        <h1 className={cl.hotel__title}>{data.title}</h1>
                        <div className={cl.hotel__adress}>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <span>{data.address}</span>
                        </div>
                        <span className={cl.hotel__distance}>
                            Excellent location – {data.distance}m from center
                    </span>
                        <span className={cl.hotel__highlite}>
                            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                    </span>

                        <div className={cl.hotel__image}>
                            {data.photos?.map((photo, idx) => (<div key={photo} className={cl.hotel__image__wrapper}>
                                <img onClick={() => handleOpen(idx)} src={photo} alt="img"/>
                            </div>))}
                        </div>

                        <div className={cl.hotel__details}>
                            <div className={cl.hotel__details__texts}>
                                <h1>{data.title}</h1>
                                <p>
                                    {data.description}
                                </p>
                            </div>

                            <div className={cl.hotel__details__price}>
                                <h1>Perfect for a 9-night stay!</h1>
                                <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                                <h2>
                                    <b>$945</b> (9 nights)
                                </h2>
                                <button>Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                    <EmailList/>
                    <Footer/>
                </>
            }
        </div>
    </>)
}