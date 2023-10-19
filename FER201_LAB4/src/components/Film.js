import React, { Component } from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Film({films}) {
    const[film, setFilm] = useState([]);
    const[showPopup, setShowPopup] = useState(false);

        return (

            <div className="container film" >
               
                 <div  className="row row-content film">
                 {films.map((film) => (
                       
                            <div className="col col-sm-4 col-md-4" key={film.id}>
                                <div className="card">
                                    <img  src={film.img} />
                                    <h3>{film.Title}</h3>
                                    <p className="title">{film.nation}</p>
                                    <Link to={`detail/${film.id}`}>
                            

                                        <p><button className="btn btn-dark btn-lg btn-block">
                                        Detail</button></p>
                                    </Link>
                                    
                                        
                                </div>
                            </div>
                ))}

                {/* <div id="popup" className="overlay">
                    <div className="popup">
                        <img src={film.img}/>
                        <h2>{film.name}</h2>
                        <a className="close" href="#">&times;</a>
                        <div className="content">
                            {film.info}
                        </div>
                    </div>


                </div> */}



                 </div>
               



            </div>
        )


}