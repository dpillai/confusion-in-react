import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

class Menu extends Component {
    constructor(props){
        super(props);
        console.log('Menu called')
    }
    componentDidMount(){
        console.log('Menu did mount')
    }
    render() {
        const Menu = this.props.dishes.map((dish) =>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return (    
            <div className="container">
                <div className="row">
                    {Menu}
                </div> 
            </div>
        )
    }
}

export default Menu