import React, { Component } from 'react';

export default class MealList extends Component {
  
  render() {
    const meals = this.props.meals;
    const totalCalories = this.props.totalCalories

    return (
      <div>
      <ul>
      {meals.map(meal => {
          return (
          <li>{meal.name}</li>
          );  
        })}
      </ul>
        

        Total Calories:{totalCalories};
      </div>
       
      
    );
  }
}