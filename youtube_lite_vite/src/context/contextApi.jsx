import { createContext, useEffect, useState } from "react";

import { getDataFromApi } from '../utils/api.jsx'

export const Context = createContext();

export const AppContext = (props) => {

    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchresults] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("NEW");
    const [mobileMenu, setMobileMenu] = useState(false);

// USe Effect for fetch when category change
useEffect(() => {
    getSelectedCategoryData(selectedCategory);
}, [selectedCategory]);

// this function called in useEffect --- run when category change --- using getDataFromAPI method from api.js
    const getSelectedCategoryData = (query) => {
        setLoading(true)
        getDataFromApi(`search/?q=${query}`)
        .then((res) => {
            console.log(res)
            setSearchresults(res)
            setLoading(false)
        })
    }

// returning the data to props
    return (
        <Context.Provider value={{
            loading, 
            setLoading, 
            searchResults,
            setSearchresults, 
            selectedCategory, 
            setSelectedCategory, 
            mobileMenu, 
            setMobileMenu
        }}>
          {props.childern}   
          {/* props passed on AppContext main Component */}
        </Context.Provider>
      );
}