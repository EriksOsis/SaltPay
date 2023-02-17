import classes from "./CountryCard.module.css";

interface CountryCardProps {
    country: any
}

export function CountryCard({country}: CountryCardProps) {
    return (
        <div className={classes['card-container']}>
            <div className={classes['flag-container']}>
                <img className={classes['flag-img']} src={country.flags.png} alt={`${country.name.common} flag`}/>
            </div>
            <div className={classes['card-info']}>
                <h2 className={classes['country-name']}>{country.name.common}</h2>
                <div className={classes.PRC}>
                    <p>Population: <span>{country.population.toLocaleString()}</span></p>
                    <p>Region: <span>{country.region}</span></p>
                    <p>Capital: <span>{country.capital}</span></p>
                </div>
            </div>
        </div>
    )
}