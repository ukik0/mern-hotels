import {Header} from "../../Components/Header/Header";
import {Navbar} from "../../Components/Navbar/Navbar";
import cl from './HotelPage.module.scss'
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {format} from "date-fns";
import {DateRange} from 'react-date-range';
import {SearchItem} from "../../Components/SearchItem/SearchItem";


export function HotelPage() {
    const location = useLocation()

    const [destionation, setDestionation] = useState(location.state.destination);
    const [options, setOptions] = useState(location.state.options);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);

    return (<>
            <Navbar/>
            <Header/>
            <div className={cl.list__container}>
                <div className={cl.list__wrapper}>
                    <div className={cl.list__search}>
                        <h1 className={cl.list__search__title}>
                            Search
                        </h1>

                        <div className={cl.list__search__item}>
                            <label>Destination</label>
                            <input placeholder={destionation} type="text"/>
                        </div>

                        <div className={cl.list__search__item}>
                            <label>Check-in-Date</label>
                            <span
                                onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange onChange={item => setDate([item.selection])} minDate={new Date()}
                                                    ranges={date}/>}
                        </div>

                        <label htmlFor="">Options</label>

                        <div className={cl.options__wrapper}>
                            <div className={cl.list__search__item__options}>
                                <span>Min price <small>per night</small></span>

                                <input type="number"/>
                            </div>

                            <div className={cl.list__search__item__options}>
                                <span>Max price <small>per night</small></span>

                                <input type="number"/>
                            </div>

                            <div className={cl.list__search__item__options}>
                                <span>Adult</span>

                                <input min={1} type="number" placeholder={options.adult}/>
                            </div>

                            <div className={cl.list__search__item__options}>
                                <span>Children</span>

                                <input min={0} type="number" placeholder={options.children}/>
                            </div>

                            <div className={cl.list__search__item__options}>
                                <span>Root</span>

                                <input min={0} type="number" placeholder={options.room}/>
                            </div>
                        </div>

                        <button>Search</button>

                    </div>
                    <div className={cl.list__result}>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </>
    )
}