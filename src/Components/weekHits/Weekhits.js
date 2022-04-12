import React from 'react';
import { Link,useNavigate } from 'react-router-dom';


function Weekhits({data}) {
    // console.log(props.data.results)
    // let cardss=props.data.results.map((e)=>{
    //     return <div className="card">
    //     <div className="img">

    //     <img src="" alt="" />
    //     </div>
    //     <div className="details">
    //         <p>Rating</p>
    //     <p>Movie name</p>
    //     <p>Time</p>
    //     </div>
        
    // </div>
    // })
    console.log(data);
    const Navigate=useNavigate();
    let cardsss=data?data.data.results.map((e)=>{
        return <div className="card" onClick={()=>Navigate(`/movies/${e.id}`)}>
                 <div className="img">
    
                 <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt="" />
                 </div>
                 <div className="details">
                    <p>⭐{e.vote_average}</p>
                    <p className='title'>{e.original_title|| e.name}</p>
                    <p>{e.release_date||e.first_air_date}</p>
                 </div>
                 {/* <Link to={`/movies/${e.id}`}>show Details</Link> */}
        </div>
    }):"loading"
  return <div className='back'>
      <div className="head">
        <p className='heading'>Fan favorites</p>
      <p style={{fontSize:'0.9vmax'}}>Trending top TV and movies</p>
      </div>
       <div className="cardContainer">
            {cardsss}
       
       </div>
  </div>;
}

export default Weekhits;
