import React, {Component} from 'react';
import {Col} from "react-bootstrap";

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: " clicked",
            index: this.props.data[0],
            clicked: this.props.data[1],
            name: this.props.data[2]
        };
        this.handleClick = this.handleClick.bind(this);
        this.getStyle = this.getStyle.bind(this);
    }

    handleClick = () => {
        if (this.state.name !== "FREE") {
            this.setState({clicked: !this.state.clicked});
            this.props.update(this.state.index);
        }
    };

    getStyle = () => {
        if (this.state.name === "FREE")
            return " free";
        return this.state.clicked ? this.state.style : "";
    };

    render() {
        return <Col onClick={this.handleClick}>
            <div className={"square" + this.getStyle()}>{this.state.name}</div>
        </Col>
    }
}

export default Square;
