//Module Imports
import React, { useState, useEffect} from 'react'
import MainContext from './MainContext'
import PrimaryDisplay from './classic/PrimaryDisplay/PrimaryDisplay'
//React Routes


//Misc
import "./styles.css";

//REDUX:
//Reducer
//Store
//const MainContext = createContext(null);

export default function App(props) {

  const [cpage, csetPage] = useState("HOME");
  const setClassicPage = (cinPage) => csetPage(cinPage);
  const classicPage = () => cpage;

  const api = {setClassicPage, classicPage};


  return (
    <>
    <MainContext.Provider value={api}>
      <PrimaryDisplay />
    </MainContext.Provider>
    </>
  );
}
