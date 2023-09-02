import React, {Component} from "react";
import styles from "./Card.module.css";


class Card extends Component {

    render() {
        const {image, cost}=this.props;
        

        return (
            
         <div className={styles.container}>
             <img src={image} alt="clock"/>
             <h2> {cost} </h2>
         </div>
            

        );
    };
}


export default Card;