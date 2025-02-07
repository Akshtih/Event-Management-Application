import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/Header/Header';

import EventDisplay from '../../components/EventDisplay/EventDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        
        <EventDisplay category = {category}/>
        <AppDownload/>
    </div>
  )
}

export default Home