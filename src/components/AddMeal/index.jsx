import React, { Component } from 'react';

import MealBox from '../MealBox/index';
//import meals from './../';


export default class AddMeal extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      calories: '',
      image:'',
      quantity:'',
      //meal: meals

    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);

  };

  handleFormSubmission(event) {
    event.preventDefault();

    const name = this.state.name;
    const calories = this.state.calories;
    const image = this.state.image;
    const quantity = this.state.quantity;

    if (!name || !calories || !image || !quantity){
      return;
    } 

    const plate = {
      id: Date.now().toString(),
      name, calories, image, quantity
    };

    this.props.addMeal(plate);

    this.setState({
      name: '',
      calories: '',
      image:'',
      quantity:'',
    });
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    

    return (

    <div>
      <form onSubmit={this.handleFormSubmission}>

        <input type="text" 
        placeholder="Name of meal"
        name="name"
        value={this.state.name}
        onChange={this.handleInputChange}/>

        <input type="text" 
        placeholder="calories"
        name="calories"
        value={this.state.calories}
        onChange={this.handleInputChange}/>

        <input type="text" 
        placeholder="Images source" 
        name="image"
        value={this.state.image}
        onChange={this.handleInputChange}/>

        <input type="number" 
        placeholder="quantity" 
        name="quantity"
        value={this.state.quantity}
        onChange={this.handleInputChange}/>

        <button>Add the meal</button>
        </form>

        
    </div>
      
    
    );
  }
}

