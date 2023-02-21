import classes from './HomePage.module.css';
import {SearchBar} from "../UI/SearchBar/SearchBar";
import {FilterBar} from "../UI/Filter/FilterBar";
import {CountryCard} from "../UI/CountryCard/CountryCard";
import React, {useEffect, useState} from "react";


export interface Country {
    name: { official: string };
}

export function Homepage(): JSX.Element {
    const [countries, setCountries] = useState<Country[]>([]);

    function getAllCountries() {
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
    }

    useEffect(() => {
        getAllCountries();
    }, []);

    return (
        <section className={classes['homepage-container']}>
            <div className={classes['top-menu']}>
                <SearchBar/>
                <FilterBar getAllCountries={getAllCountries} setCountries={setCountries}/>
            </div>
            <div className={classes['cards-container']}>
                {countries.map(country => <CountryCard key={country.name.official} country={country}/>)}
            </div>
        </section>
    )
}