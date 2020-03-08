import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import meals from './meals.json';

import MealList from './components/MealList';
import TodaysFood from './components/TodaysFood';
import AddMeal from './components/AddMeal';

//import meals from './meals';

class App extends Component {
  constructor() {
    super();

    this.state = {
      meals: meals,
      active:true,
      query:  '',
      todaysFood: [],
      totalCalories:0
    };

    this.handleTodaysFood=this.handleTodaysFood.bind(this);
    this.showingForm = this.showingForm.bind(this);
    this.handleMealAddition = this.handleMealAddition.bind(this);
    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.deleteMeal = this.deleteMeal.bind(this);
  }

  /*SEARCH*/
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


  /*ADD MEAL*/
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



  /*DIETA*/
  handleTodaysFood(meal){
    this.setState(previousState => ({
      todaysFood: [...previousState.todaysFood, meal],
      totalCalories: Number(previousState.totalCalories) + Number(meal.calories)
    }));
  }

  /*deleteMeal*/

  deleteMeal(id){
    
    const remainingMeal = this.state.meals.filter( meal => meal.name !== id);
    this.setState({
      meals: remainingMeal
    });
  }

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
        <div className="container">
          <div className="Row">
            <div className="col-7">
              <MealList 
              meals={this.filteredMeals} 
              todaysFood={this.handleTodaysFood} 
              deleteMeal={this.deleteMeal}/>
            </div>

            <div className="col-5">
              <h1>Today's Food</h1>
              <TodaysFood meals={this.state.todaysFood} totalCalories={this.state.totalCalories} />
            </div>
          </div>
          
        </div>
        
        
    
      </div>
    );
  }
}

export default App;
