import classes from './SearchBar.module.css';
import {IonIcon} from "@ionic/react";
import {searchOutline} from "ionicons/icons";

export function SearchBar() {
    return (
        <div className={classes.search}>
            <IonIcon icon={searchOutline} className={classes['search-icon']}></IonIcon>
            <input type={"text"} className={classes['search-input']} placeholder={'Search for a country...'}/>
        </div>
    )
}