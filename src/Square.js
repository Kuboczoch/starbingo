import React, {Component} from 'react';
import {Col} from "react-bootstrap";

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            style: " clicked"
        };
        this.handleClick = this.handleClick.bind(this);
        this.getStyle = this.getStyle.bind(this);
    }

    handleClick = () => {
        if (this.props.name !== "FREE")
            this.setState({clicked: !this.state.clicked})
    };

    getStyle = () => {
        if (this.props.name === "FREE")
            return " free";
        return this.state.clicked ? this.state.style : "";
    };

    render() {
        return <Col onClick={this.handleClick}>
            <div className={"square" + this.getStyle()}>{this.props.name}</div>
        </Col>
    }
}

export default Square;
