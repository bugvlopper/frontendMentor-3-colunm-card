import React from "react";
import "../css/Button.css"

class Button extends React.Component {
    constructor(props){
        super(props)
        switch(this.props.color){
            case "hsl(31, 77%, 52%)":
                this.class = "orange";
            break;
            case "hsl(184, 100%, 22%)":
                this.class = "darkCyan";
            break;
            case "hsl(179, 100%, 13%)":
                this.class = "veryDarkCyan";
            break;
            default:
                this.class = "";
        }
        this.color = this.props.color
    }

    componentDidMount(){
        
    }

    render() { 
        return (
            <div id="button" className={"button " + this.class}>
                    <p >
                        Learn More
                    </p>
                </div>
        );
    }
}
 
export default Button;