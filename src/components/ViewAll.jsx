import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const ViewAll = () => {
  const[data,changeData]=useState(
    [
  ]
  )
  const fetchData=()=>{
    axios.get("https://dummyapi.online/api/movies").then((response)=>{changeData(response.data)
        
    }
    )
}
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Header></Header>
        <br></br>
       <div class="container">
        <div class="row ">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
            {data.map(
              (value,index)=>{
                return <div class="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">{value.movie}</h5>
                      <p class="card-text">Rating : {value.rating}</p>
                      <a target='_blank' href={value.imdb_url} class="btn btn-primary">View Details</a>
                    </div>
                  </div>
            </div>                            
}
)}
</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ViewAll