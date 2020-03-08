import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import meals from './meals.json';

import MealBox from './components/MealBox/index';
import AddMeal from './components/AddMeal';

//import meals from './meals';

class App extends Component {
  constructor() {
    super();

    this.state = {
      meals: meals,
      active:true
    };

    this.showingForm = this.showingForm.bind(this);
    this.handleMealAddition = this.handleMealAddition.bind(this);
  }

  handleMealAddition(meal) {
    this.setState(previousState => ({
      meals: [...previousState.meals, meal]
    }));
  }

  showingForm(){
    this.setState(previousState => ({
      active: !previousState.active
    }))
  };

  render() {
    const meals = this.state.meals
    return (
      <div className="App">
        <h1>Ironutrition</h1>
        <button onClick={this.showingForm}>{this.state.active ? 'Add a new Meal' : 'Hide the form'}</button>
        <div style={{display: this.state.active ? 'none' : 'block'}}>

          <AddMeal addMeal={this.handleMealAddition}></AddMeal>
        </div>
        
        {this.state.meals.map(meal => {
              return (
                <MealBox  
                  name={meal.name}
                  img={meal.image}
                  calories={meal.calories}
                ></MealBox>


                
              );
            })}



       
      </div>
    );
  }
}

export default App;
