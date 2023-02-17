import classes from "./CountryCard.module.css";

export function CountryCard() {
    return (
        <div className={classes['card-container']}>
            <div className={classes['flag-container']}>
                <img className={classes['flag-img']}/>
            </div>
            <div className={classes['card-info']}>
                <h2 className={classes['country-name']}>Germany</h2>
                <div className={classes.PRC}>
                    <p>Population: <span>1000000</span></p>
                    <p>Region: <span>Europe</span></p>
                    <p>Capital: <span>Berlin</span></p>
                </div>
            </div>
        </div>
    )
}