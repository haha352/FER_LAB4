import { useParams } from "react-router-dom";
import ListOfFilm from "../shared/ListOfFilm";

export default function Detail() {

    const userName = useParams();
    const film = ListOfFilm.find(film=>{
        return film.id == userName.id;
    });

    

    return(
        <div className="container">
            <div className="product-card">

                <div className= "badge">{film.Title}</div>
                <div className="product-tumb">
                    <img className="img-details" src={`../${film.img}`} alt='' />
                </div>
                <div className="product-details">
                    <h4>{film.year}</h4>
                    
                    <p>{film.nation}</p>
                    <p>{film.info}</p>
                    <div className="product-bottom-details"></div>

                </div>
            </div>

        </div>
    )

}