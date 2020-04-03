import React from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';

const RenderDish = ({dish}) => {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

const RenderComments = ({dish, comments}) => {
    
    const filteredComments = comments.filter(comment => comment.dishId == dish.id)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    const commentList = filteredComments.map((comment) =>
        <li key={comment.id}>
            {comment.comment}
            <br/><br/>
            -- {comment.author}, {new Date(comment.date).toLocaleDateString([],options)}
        </li>
    )
    return (
        <>
            <h4>Comments</h4>
            <ul className="list-unstyled">{commentList}</ul>
        </>
    )
}
const DishDetails = (props) => {
    const dish = props.selectedDish
    if(dish) {  
        return (
            <div className="container">
                <div className="row">
                    <div className= "col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className= "col-12 col-md-5 m-1">
                        <RenderComments  dish={dish} comments={props.comments} />
                    </div>
                </div>
            </div>
        )
    }
    else
        return <div></div>
}

export default DishDetails