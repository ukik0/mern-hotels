import './Reserve.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../Hooks/useFetching";
import {useState} from "react";
import {useSelector} from "react-redux";
import axios from "../../utils/axios";
import {useNavigate} from "react-router-dom";
import {checkDates} from "../../Redux/Slices/authSlice";
import {getDatesInRange} from "../../utils/getDatesInRange";

export function Reserve({setOpen, hotelId}) {
    const dates = useSelector(checkDates)
    const navigate = useNavigate()

    const [selectedRooms, setSelectedRooms] = useState([]);

    const {data} = useFetch(`/hotels/room/${hotelId}`)

    function onInputChange(e) {
        const checked = e.target.checked
        setSelectedRooms(checked ? [...selectedRooms, e.target.value] : selectedRooms.filter((room) => room !== e.target.value))
    }

    const alldates = getDatesInRange(dates.startDate, dates.endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            alldates.includes(new Date(date).getTime())
        );

        return !isFound;
    };


   async function handleReserveClick() {
        await Promise.all(selectedRooms.map((room) => {
            const {data} = axios.patch(`/rooms/availability/${room}`, {dates: alldates})
            return data
        }))

       setOpen(false)
    }

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <span>Select your rooms:</span>

                {data.map((item) => (
                    <div key={item._id} className="rItem" key={item._id}>
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">
                                Max people: <b>{item.maxPeople}</b>
                            </div>
                            <div className="rPrice">{item.price}</div>
                        </div>
                        <div className="rSelectRooms">
                            {item.roomNumbers.map((roomNumber, idx) => (
                                <div key={idx} className="room">
                                    <label>{roomNumber.number}</label>
                                    <input
                                        type="checkbox"
                                        value={roomNumber._id}
                                        onChange={onInputChange}
                                        disabled={!isAvailable(roomNumber)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <button className="rButton" onClick={handleReserveClick}>
                    Reserve Now!
                </button>
            </div>
        </div>
    )
}