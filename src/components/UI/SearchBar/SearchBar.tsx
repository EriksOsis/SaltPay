import classes from './SearchBar.module.css';
import {IonIcon} from "@ionic/react";
import {searchOutline} from "ionicons/icons";
import React from "react";

interface SearchBarProps {
    setSearchedCountry: (event: string) => void
}


export function SearchBar({setSearchedCountry}: SearchBarProps) {

    function handleCountrySearch(event: { target: { value: string; }; }) {
        setSearchedCountry(event.target.value);
    }

    return (
        <div className={classes.search}>
            <IonIcon icon={searchOutline} className={classes['search-icon']}></IonIcon>
            <input type={"text"} className={classes['search-input']} placeholder={'Search for a country...'}
                   onChange={handleCountrySearch}/>
        </div>
    )
}