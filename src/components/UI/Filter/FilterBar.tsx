// import {IonIcon} from "@ionic/react";
// import {chevronDownOutline} from "ionicons/icons";
import classes from "./FilterBar.module.css";
import React, {useEffect, useState} from "react";
import {Country} from "../../HomePage/Homepage";

interface FilterBarProps {
    setCountries: React.Dispatch<React.SetStateAction<Country[]>>,
    getAllCountries: () => void
}

export function FilterBar({ setCountries, getAllCountries }: FilterBarProps) {
    const [region, setRegion] = useState<string>("");

    function handleRegionChange(event: { target: { value: string; }; }) {
        setRegion(event.target.value);
    }

    useEffect(() => {
        if (region !== "") {
            fetch(`https://restcountries.com/v3.1/region/${region}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setCountries(data);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            getAllCountries();
        }
    }, [region]);

    return (
        <div className={classes['filter-bar']}>
            <select className={classes['filter-select']} onChange={handleRegionChange}>
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            {/*<IonIcon icon={chevronDownOutline}></IonIcon>*/}
        </div>
    )
}