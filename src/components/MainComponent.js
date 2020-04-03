import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DISHES from '../shared/dishes';
import DishDetails from './DishDetailsComponent';
import { COMMENTS } from '../shared/comments';

class Main extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            dishes: DISHES,
            selectedDish: null,
        }
        console.log('Main called')
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish, 
        })
    }

    render() {
        return (
            <div>
              <Navbar color="primary" dark>
                {/* <div className="container-fluid"> */}
                  <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                {/* </div> */}
              </Navbar>
              <Menu dishes={DISHES} onClick={(dish) => this.onDishSelect(dish)} />
              <DishDetails selectedDish={this.state.selectedDish} comments={COMMENTS} />
            </div>
        );
    }
}

export default Main;