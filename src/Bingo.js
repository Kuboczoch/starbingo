import React, {Component} from 'react';
import {Row} from "react-bootstrap";
import Square from './Square';

class Table extends Component {
    render() {
        const RowSquare = (props) => {
            let i = props.i;
            return (
                <Row>
                    {[0, 1, 2, 3, 4].map(item => (
                        <Square key={item + i} update={this.props.handleUpdate} data={this.props.data[item + i]}/>
                    ))}
                </Row>
            );
        };

        return (
            <div className={"bingo"}>
                <button type="button" className="btn btn-secondary reset" onClick={this.props.handleReset}>Reset
                </button>
                {[0, 1, 2, 3, 4].map(item => (
                    <RowSquare key={item} i={item * 5}/>
                ))}
            </div>
        );
    }
}

export default Table;
