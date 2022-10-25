import cl from './Footer.module.scss'

export function Footer() {
    return (
        <div className={cl.footer}>
            <div className={cl.footer__lists}>
                <ul className={cl.footer__list}>
                    <li className={cl.footer__list__item}>Countries</li>
                    <li className={cl.footer__list__item}>Regions</li>
                    <li className={cl.footer__list__item}>Cities</li>
                    <li className={cl.footer__list__item}>Districts</li>
                    <li className={cl.footer__list__item}>Airports</li>
                    <li className={cl.footer__list__item}>Hotels</li>
                </ul>

                <ul className={cl.footer__list}>
                    <li className={cl.footer__list__item}>Homes</li>
                    <li className={cl.footer__list__item}>Apartments</li>
                    <li className={cl.footer__list__item}>Resorts</li>
                    <li className={cl.footer__list__item}>Villas</li>
                    <li className={cl.footer__list__item}>Hostels</li>
                    <li className={cl.footer__list__item}>Guest houses</li>
                </ul>

                <ul className={cl.footer__list}>
                    <li className={cl.footer__list__item}>Unique places to stay</li>
                    <li className={cl.footer__list__item}>Reviews</li>
                    <li className={cl.footer__list__item}>Unpacked: Travel articles</li>
                    <li className={cl.footer__list__item}>Travel communities</li>
                    <li className={cl.footer__list__item}>Seasonal and holiday deals</li>
                </ul>

                <ul className={cl.footer__list}>
                    <li className={cl.footer__list__item}>Car rental</li>
                    <li className={cl.footer__list__item}>Flight Finder</li>
                    <li className={cl.footer__list__item}>Restaurant reservations</li>
                    <li className={cl.footer__list__item}>Travel Agents</li>
                </ul>

                <ul className={cl.footer__list}>
                    <li className={cl.footer__list__item}>Curtomer Service</li>
                    <li className={cl.footer__list__item}>Partner Help</li>
                    <li className={cl.footer__list__item}>Careers</li>
                    <li className={cl.footer__list__item}>Sustainability</li>
                    <li className={cl.footer__list__item}>Press center</li>
                    <li className={cl.footer__list__item}>Safety Resource Center</li>
                    <li className={cl.footer__list__item}>Investor relations</li>
                    <li className={cl.footer__list__item}>Terms & conditions</li>
                </ul>
            </div>
            <div className={cl.footer__text}>
                Copyright © 2022 Lamabooking
            </div>
        </div>
    )
}