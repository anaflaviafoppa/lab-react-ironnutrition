import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import meals from './meals.json';

import MealList from './components/MealList';
import AddMeal from './components/AddMeal';

//import meals from './meals';

class App extends Component {
  constructor() {
    super();

    this.state = {
      meals: meals,
      active:true,
      query:  '',
    };

    this.showingForm = this.showingForm.bind(this);
    this.handleMealAddition = this.handleMealAddition.bind(this);
    this.handleInputSearch = this.handleInputSearch.bind(this);
  }

  handleInputSearch(event){
    const { name, value } = event.target;
    
    this.setState({
      [name]: value
    });
  };

  get filteredMeals(){
    
    const filteredMeals = this.state.meals.filter( meal =>{
      return meal.name.toLowerCase().includes(this.state.query.toLowerCase());
    });

    return filteredMeals;
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
    
    return (
      <div className="App">
        <h1>Ironutrition</h1>

        <form>
          <input
            type="search"
            name="query"
            value={this.state.query}
            onChange={this.handleInputSearch}
            placeholder="Search for anything..."
            autoComplete="off"
          />
        </form>

        <button onClick={this.showingForm}>{this.state.active ? 'Add a new Meal' : 'Hide the form'}</button>
        <div style={{display: this.state.active ? 'none' : 'block'}}>
          <AddMeal addMeal={this.handleMealAddition}></AddMeal>
        </div>

        <MealList meals={this.filteredMeals} />
        
    
      </div>
    );
  }
}

export default App;
