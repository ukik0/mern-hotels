import cl from './PropertyList.module.scss'
import useFetch from "../../Hooks/useFetching";
import {images} from '../../Assets/data'


export function PropertyList() {
    const {data, loading} = useFetch('/hotels/countByType')

    return (
        <>
            {loading ? <h1>Loading</h1> :

                <>
                    <div className={cl.list}>
                        {data && images?.map((image, idx) => (
                            <div key={image} className={cl.list__item}>
                                <img
                                    className={cl.list__img}
                                    src={image}
                                    alt="city"/>
                                <div className={cl.list__titles}>
                                    <h1>{data[idx]?.type}</h1>
                                    <h2>{data[idx]?.count} {data?.[idx]?.type}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }

        </>
    )
}