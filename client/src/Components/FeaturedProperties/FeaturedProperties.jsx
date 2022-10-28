import cl from './FeaturedProperties.module.scss'
import useFetch from "../../Hooks/useFetching";

export function FeaturedProperties() {
    const {data, loading, error} = useFetch('/hotels/?featured=true&limit=4')

    return (
        <div className={cl.property}>
            {loading ? <h1>Loading</h1> :
                <>
                    {data.map((item, idx) => (
                        <div key={item._id} className={cl.property__item}>
                            <img
                                src={item.photos[0]}
                                alt="city"/>
                            <span className={cl.property__name}>{item.name}</span>
                            <span className={cl.property__city}>{item.city}</span>
                            <span className={cl.property__price}>Starting from {item.cheapestPrice}$</span>
                            {item.rating && (
                                <div className={cl.property__rating}>
                                    <button>{item.rating}</button>
                                    <span>Excellent</span>
                                </div>
                            )}
                        </div>
                    ))}
                </>
            }
        </div>
    )
}