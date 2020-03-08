import React, { Component } from 'react';
import MealBox from '../MealBox';


export default class MealList extends Component {
  render() {
    const meals = this.props.meals;

    return (
      meals.map(meal => {
        return (
          <MealBox  
            name={meal.name}
            img={meal.image}
            calories={meal.calories}
          ></MealBox> 
        );
      })
    );
  }
}
