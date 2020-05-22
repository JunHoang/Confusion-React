import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const dish = this.props.dish;

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card >
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">

                </div>

            </div>
        )
    }
}

export default DishDetail;