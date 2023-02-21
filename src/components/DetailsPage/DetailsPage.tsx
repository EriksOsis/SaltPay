import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import classes from "./DetailsPage.module.css";
import {arrowBackOutline} from "ionicons/icons";
import {IonIcon} from "@ionic/react";

interface CountryDetails {
    name: string;
    capital: string[];
    languages: [{ name: string }];
    flags: { [key: string]: string };
    population: number;
    currencies: [{ name: string }];
    region: string;
    subregion: string;
    topLevelDomain: string[];
    borders: string[];
}

interface RouteParams {
    country: string;
}

export function DetailsPage() {
    const params = useParams<RouteParams>();//params.country

    const [countryDetails, setCountryDetails] = useState<CountryDetails[]>();

    //all
    useEffect(() => {
        if (params.country) {
            fetch(`https://restcountries.com/v2/name/${params.country}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setCountryDetails(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [params.country]);

    console.log(countryDetails?.[0]);


    if (!countryDetails) {
        return <div>Loading...</div>;
    }

    return (
        <section className={classes['details-page']}>
            <Link to={'/home'} className={classes['back-btn']}>
                <IonIcon icon={arrowBackOutline} className={classes['search-icon']}></IonIcon>Back</Link>
            <div className={classes['content']}>
                <div className={classes['flag-container']}>
                    <img className={classes.flag} src={countryDetails?.[0].flags.png}
                         alt={`${countryDetails?.[0].name} flag`}/>
                </div>
                <div className={classes['country-info-container']}>
                    <h1 className={classes.name}>{countryDetails?.[0].name}</h1>
                    <div className={classes['country-info']}>
                        <div>
                            <p><span className={classes.bold}>Population:</span> {countryDetails?.[0].population}</p>
                            <p><span className={classes.bold}>Region:</span> {countryDetails?.[0].region}</p>
                            <p><span className={classes.bold}>Region:</span> {countryDetails?.[0].subregion}</p>
                            <p><span className={classes.bold}>Capital:</span> {countryDetails?.[0].capital}
                            </p>
                        </div>
                        <div>
                            <p><span
                                className={classes.bold}>Top Level Domain:</span> {countryDetails?.[0].topLevelDomain.join(", ")}
                            </p>
                            <p><span
                                className={classes.bold}>Currencies:</span> {countryDetails?.[0].currencies[0].name}
                            </p>
                            <p><span className={classes.bold}>Languages:</span> {countryDetails?.[0].languages[0].name}</p>
                        </div>
                    </div>
                    <div className={classes['border-countries']}>
                        <p>Border Countries: </p>
                        {countryDetails?.[0].borders && countryDetails?.[0].borders.map(neighbor => <button>{neighbor}</button>)}

                    </div>
                </div>
            </div>
        </section>
    )
}