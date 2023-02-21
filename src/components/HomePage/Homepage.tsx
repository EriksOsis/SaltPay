import classes from './HomePage.module.css';
import {SearchBar} from "../UI/SearchBar/SearchBar";
import {FilterBar} from "../UI/Filter/FilterBar";
import {CountryCard} from "../UI/CountryCard/CountryCard";
import React, {useEffect, useState} from "react";


export interface Country {
    name: string ;
}

export function Homepage(): JSX.Element {
    const [countries, setCountries] = useState<Country[]>([]);
    const [searchedCountry, setSearchedCountry] = useState('');

    function getAllCountries() {
        fetch('https://restcountries.com/v2/all')
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
    }, [searchedCountry]);

    return (
        <section className={classes['homepage-container']}>
            <div className={classes['top-menu']}>
                <SearchBar setSearchedCountry={setSearchedCountry}/>
                <FilterBar getAllCountries={getAllCountries} setCountries={setCountries}/>
            </div>
            <div className={classes['cards-container']}>
                {countries.map(country => country.name.includes(searchedCountry) &&
                    <CountryCard key={country.name} country={country}/>
                    )}
            </div>
        </section>
    )
}