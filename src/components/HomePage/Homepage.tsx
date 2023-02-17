import classes from './HomePage.module.css';
import {SearchBar} from "../UI/SearchBar/SearchBar";
import {FilterBar} from "../UI/Filter/FilterBar";
import {CountryCard} from "../UI/CountryCard/CountryCard";

export function Homepage(): JSX.Element {
    return (
        <section className={classes['homepage-container']}>
            <div className={classes['top-menu']}>
                <SearchBar/>
                <FilterBar/>
            </div>
            <div className={classes['cards-container']}>
                <CountryCard/>
            </div>
        </section>
    )
}