import cl from './Header.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import {DateRange} from 'react-date-range';
import {useState} from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns";

export function Header() {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    function handleOptions(name, operation) {
        setOptions(prevState => {
            return {
                ...prevState, [name]: operation === "i" ? options[name] += 1 : options[name] -= 1
            }
        })
    }

    return (
        <div className={cl.header}>
            <div className={cl.header__container}>

                <div className={cl.header__list}>
                    <div className={`${cl.header__list__item} ${cl.active}`}>
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>

                    <div className={cl.header__list__item}>
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>

                    <div className={cl.header__list__item}>
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car rentals</span>
                    </div>

                    <div className={cl.header__list__item}>
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Attractions</span>
                    </div>

                    <div className={cl.header__list__item}>
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport Taxis</span>
                    </div>
                </div>

                <h1 className={cl.header__title}>
                    A lifetime of discounts? It's Genius.
                </h1>

                <p className={cl.header__desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, impedit.
                </p>

                <button className={cl.header__button}>
                    Sign in / Register
                </button>

                <div className={cl.header__search}>
                    <div className={cl.header__search__item}>
                        <FontAwesomeIcon icon={faBed} className={cl.header__icon}/>
                        <input type="text" placeholder={'Where are you going?'} className={cl.header__search__input}/>
                    </div>

                    <div className={cl.header__search__item}>
                        <FontAwesomeIcon icon={faCalendarDays} className={cl.header__icon}/>
                        <span onClick={() => setOpenDate(!openDate)}
                              className={cl.header__search__date}> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`} </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className={cl.date}
                        />}

                    </div>

                    <div className={cl.header__search__item}>
                        <FontAwesomeIcon icon={faPerson} className={cl.header__icon}/>
                        <span onClick={() => setOpenOptions(!openOptions)}
                              className={cl.header__search__date}> {`${options.adult} adults ${options.children} children ${options.room} room`}</span>
                        {openOptions && <div className={cl.options}>
                            <div className={cl.options__item}>
                                <span className={cl.optins__item__text}>Adult</span>
                                <div className={cl.options__item__wrapper}>
                                    <button disabled={options.adult <= 0} className={cl.options__item__button}
                                            onClick={() => setOptions({...options, adult: +options.adult - 1})}>-
                                    </button>
                                    <span className={cl.options__item__counter}>{options.adult}</span>
                                    <button className={cl.options__item__button}
                                            onClick={() => handleOptions('adult', "i")}>+
                                    </button>
                                </div>

                            </div>

                            <div className={cl.options__item}>
                                <span className={cl.optins__item__text}>Children</span>
                                <div className={cl.options__item__wrapper}>
                                    <button disabled={options.children <= 0} className={cl.options__item__button}
                                            onClick={() => handleOptions('children', "d")}>-
                                    </button>
                                    <span className={cl.options__item__counter}>{options.children}</span>
                                    <button className={cl.options__item__button}
                                            onClick={() => handleOptions('children', "i")}>+
                                    </button>
                                </div>

                            </div>

                            <div className={cl.options__item}>
                                <span className={cl.optins__item__text}>Room</span>
                                <div className={cl.options__item__wrapper}>
                                    <button disabled={options.room <= 0} className={cl.options__item__button}
                                            onClick={() => handleOptions('room', "d")}>-
                                    </button>
                                    <span className={cl.options__item__counter}>{options.room}</span>
                                    <button className={cl.options__item__button}
                                            onClick={() => handleOptions('room', "i")}>+
                                    </button>
                                </div>

                            </div>
                        </div>}
                    </div>

                    <div className={cl.header__search__item}>
                        <button className={cl.header__button}>
                            Search
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}