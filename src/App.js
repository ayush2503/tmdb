import React, { useState,useEffect } from 'react';
import Nav from './Components/Nav/Nav';
import Weekhits from './Components/weekHits/Weekhits';
import Movieinfo from "./Components/MovieInfo/MovieInfo";
import './App.css'
import { Routes, Route } from "react-router-dom";
import axios from './Api/Api';
function App() {
  const [data, setdata] = useState(null);
  const callTrendingMovieApi= async()=>{
    const api_key="c681472c2404978498ab3f5b417eec3b"
    // const url=`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`
    // fetch(url)
    // .then(response => response.json())
    // .then(data => setdata(data));
    console.log("before")
    const Moviedata= await axios.get(`trending/all/week?api_key=${api_key}`)
    console.log("after",Moviedata)
    setdata(Moviedata)
  }

  useEffect(() => {
    callTrendingMovieApi()
    console.log(data);
    // console.log('before return in effect')
    // return console.log('return in effect')
  }, []);

  console.log(data);

  return <div>
    {console.log('in render')}
      <Nav/>
      <br />
      <Routes>
        {/* <Route path='/' element={<h1>hellp</h1>}/> */}
          <Route path='/' element={<Weekhits data={data}/>}/>
  
          <Route path="/movies/:id" element={<Movieinfo/>}/>
      </Routes>
      {/* <Weekhits data={data}/> */}
  </div>;
}

export default App;
