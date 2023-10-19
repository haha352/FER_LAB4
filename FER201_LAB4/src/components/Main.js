import { Component } from "react";
import ListOfFilm from "../shared/ListOfFilm";
import Film from "./Film";

export class Main extends Component {
    constructor() {
        super();
        this.state ={
            films:ListOfFilm
        };
    }

    render() {
        return <Film films={this.state.films}/>
    }


}
export default Main