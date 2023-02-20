import classes from './HomePage.module.css';
import {SearchBar} from "../UI/SearchBar/SearchBar";
import {FilterBar} from "../UI/Filter/FilterBar";
import {CountryCard} from "../UI/CountryCard/CountryCard";
import {useEffect, useState} from "react";


interface Country {
    name: { official: string };
}

export function Homepage(): JSX.Element {
    const [countries, setCountries] = useState<Country[]>([]);

    //all
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setCountries(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    console.log(countries);

    return (
        <section className={classes['homepage-container']}>
            <div className={classes['top-menu']}>
                <SearchBar/>
                <FilterBar/>
            </div>
            <div className={classes['cards-container']}>
                {countries.map(country => <CountryCard key={country.name.official} country={country}/>)}
            </div>
        </section>
    )
}