import { Component, createElement } from "react";
import "./ui/Emojirating.css";

export class Emojirating extends Component {

    constructor(props)
    {
super(props);
this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event)
    {
        const { attribute } = this.props;
        (event.target.id==="1")?
        attribute.setTextValue(''+1):(event.target.id==="2")?attribute.setTextValue(''+2):(event.target.id==="3")?attribute.setTextValue(''+3):
        (event.target.id==="4")?attribute.setTextValue(''+4):attribute.setTextValue(''+5);
    }

    render() {
        const { attribute } = this.props;
        return (
<div class="container">   
    <div class="popup-container">

       <div class="popup">
           <input type="radio" value={attribute.value} name="buttons" id="btn1"/>
           <input type="radio" value={attribute.value} name="buttons" id="btn2"/>
           <input type="radio" value={attribute.value} name="buttons" id="btn3"/>
           <input type="radio" value={attribute.value} name="buttons" id="btn4"/>
           <input type="radio" value={attribute.value} name="buttons" id="btn5"/>

         <div class="icons">
            <label id="1" for="btn1" onClick={this.handleChange}>🙁</label>
            <label id="2" for="btn2" onClick={this.handleChange}>😐</label>
            <label id="3" for="btn3" onClick={this.handleChange}>😊</label>
            <label id="4" for="btn4" onClick={this.handleChange}>😀</label>
            <label id="5" for="btn5" onClick={this.handleChange}>😍</label>
         </div> 
        </div>  
    </div>
</div>                     
        )
    }
}
