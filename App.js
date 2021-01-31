//Module Imports
import React, { useState} from 'react'
import MainContext from './MainContext'
import PrimaryDisplay from './classic/PrimaryDisplay/PrimaryDisplay'


//Misc
import "./styles.css";

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
