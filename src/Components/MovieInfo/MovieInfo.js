import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function MovieInfo() {
    const [detail, setdetail] = useState(null)
    let {id}=useParams()
    const callDetailApi=()=>{
        const api_key="c681472c2404978498ab3f5b417eec3b"
        let url=`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
        fetch(url)
        .then(response => response.json())
        .then(data => setdetail(data));
    }
    useEffect(() => {
        callDetailApi()
    }, [])
    console.log('a',detail)
  return (
      
    <div className="detailsbg">

        <div className="detailsCard">
        <div className="lft">
            <img src={detail?`https://image.tmdb.org/t/p/w500/${detail.poster_path}`:"loading"}  alt="" />
        </div>
        <div className="rgt">
            <h1 style={{color:"rgb(255, 225, 58)",fontSize:'1.5vmax'}}>{detail?detail.original_title:"loading"} </h1>
            <h3 style={{fontSize:'1.5vmax'}}>⭐{detail?detail.vote_average:"loading"} </h3>
            <p style={{fontSize:'1.1vmax'}}>{detail?detail.overview:"loading"} </p>
            <p style={{fontSize:'1.5vmax'}}>released date = {detail?detail.release_date:"loading"} </p>
            <button>watch Trailer</button>
        </div>
        </div>
    </div>
  )
}

export default MovieInfo