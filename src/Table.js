import React, {Component} from 'react';
import {bingoList} from './bingoList';
import {Row} from "react-bootstrap";
import Square from './Square';
import shuffle from "shuffle-array";

class Table extends Component {


    render() {
        let i = 0;
        shuffle(bingoList);
        return (
            <div className={"bingo"}>
                <Row>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                </Row>
                <Row>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                </Row>
                <Row>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={"FREE"}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                </Row>
                <Row>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                </Row>
                <Row>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                    <Square name={bingoList[i++]}/>
                </Row>
            </div>
        );
    }
}

export default Table;
