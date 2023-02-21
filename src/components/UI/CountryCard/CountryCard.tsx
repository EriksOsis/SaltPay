import classes from "./CountryCard.module.css";
import {Link} from "react-router-dom";

interface CountryCardProps {
    country: any
}

export function CountryCard({country}: CountryCardProps) {
    return (
        <div className={classes['card-container']}>
            <Link to={'/details/' + country.name} className={classes['link-fix']}>
                <div className={classes['flag-container']}>
                    <img className={classes['flag-img']} src={country.flags.png} alt={`${country.name} flag`}/>
                </div>
                <div className={classes['card-info']}>
                    <h2 className={classes['country-name']}>{country.name}</h2>
                    <div className={classes.PRC}>
                        <p>Population: <span>{country.population.toLocaleString()}</span></p>
                        <p>Region: <span>{country.region}</span></p>
                        <p>Capital: <span>{country.capital}</span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}