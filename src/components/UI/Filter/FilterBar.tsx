// import {IonIcon} from "@ionic/react";
// import {chevronDownOutline} from "ionicons/icons";
import classes from "./FilterBar.module.css";

export function FilterBar() {
    return (
        <div className={classes['filter-bar']}>
            <select className={classes['filter-select']}>
                <option value="Filter by Region" disabled selected>Filter by Region</option>
                <option></option>
            </select>
            {/*<IonIcon icon={chevronDownOutline}></IonIcon>*/}
        </div>
    )
}