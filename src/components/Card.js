import React from "react";
import "../css/Card.css"
import Button from "./Button";


class Card extends React.Component {
    constructor(props){
        super(props);
        this.backgroundColor = {
            backgroundColor: this.props.data.color,
        }
    }


    render() { 
      
        return (
            <div className="card" style={this.backgroundColor}>
                <img className="svg" src={this.props.data.svgPath} alt="luxury car" />
                <div className="title">
                    <p>
                        {this.props.data.title}
                    </p>
                </div>
                <div className="content">
                    <p>
                        {this.props.data.content}
                    </p>
                </div>
                <Button color={this.props.data.color}/>
            </div>
        );
    }
}
 
export default Card;