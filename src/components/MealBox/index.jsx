import React, { Component } from 'react';



export default class MealBox extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      calories: '',
      image:'',
      quantity:'',
      //meal: meals

    }

    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  };

  handleFormSubmission(event) {
    event.preventDefault();

    


    const name = this.props.name;
    const calories = this.props.calories;
    const image = this.props.image;
    const quantity = this.props.quantity;


    const plate = {
      name, calories, image, quantity
    };

    this.props.todaysFood(plate);

  }

  render() {
    const { name,
            img,
            calories,
          } = this.props;


    return (
      <div className="media">
        <img
          src={img}
          className="img-thumbnail mr-2 mw-25 border-0"
          style={{ maxWidth: ' 10em' }}
        />

        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{name}</h5>
          <small>{calories} kcal</small>
        </div>

        <form className="row align-self-center" onSubmit={this.handleFormSubmission}>
          <input type="number" className="form-control col-5" value="1"/>
          <button className="btn btn-primary col-3">+</button>
        </form>
        
        <form  className="row align-self-center">
          <button className="btn btn-success col-4" onClick={() => this.props.deleteMeal(name)}>🗑</button>
        </form>
      </div>
    );
  }
}
