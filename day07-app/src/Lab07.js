import { useEffect, useState } from "react";

const Lab07 = () => {
    const DEFAULT_SELECT = "--SELECT--";
    
    const [countries, setCountries] = useState([]);
    const [citiesToDisplay, setCitiesToDisplay] = useState([]);
    const [citySelected, setCitySelected] = useState(DEFAULT_SELECT);
    

    const populateCities = (country) => {
        if(country !== DEFAULT_SELECT) {
            let cities = countries.filter(it => it.name === country)[0].cities;
            setCitiesToDisplay(cities);
        } else {
            setCitiesToDisplay([]);
        }
    }

    useEffect(() => {
        if(countries.length === 0) {
            fetch('/countries.json')
            .then(response => response.json())
            .then(data => setCountries(data.countries));
        }
    }, [countries]);

    useEffect(() => {
        setCitySelected(DEFAULT_SELECT);
    }, [citiesToDisplay]);

    return (<div>
        <label>Country</label>
        <select  onChange={(e) => populateCities(e.currentTarget.value)}>
            <option>{DEFAULT_SELECT}</option>
            {countries.map(it => <option key={it.name}>{it.name}</option>)}
        </select> <br/>
        <label>City</label>
        <select value={citySelected} onChange={e => setCitySelected(e.currentTarget.value)}>
            <option>{DEFAULT_SELECT}</option>
            {citiesToDisplay.map(it => <option key={it}>{it}</option>)}
        </select>
    </div>);
};
export default Lab07;