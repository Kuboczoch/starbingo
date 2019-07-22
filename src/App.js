import React, {Component} from 'react';
import {bingoList} from './bingoList';
import shuffle from "shuffle-array";
import {checkTable, loadTable, saveTable} from "./localstorageManager";
import Bingo from "./Bingo";

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resetAnimation: ""
        };
        this.table = [];
        this.table = loadTable();
        if (!checkTable()) {
            this.table = this.createTable();
            saveTable(this.table);
        }
        this.createTable = this.createTable.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    createTable = () => {
        let table = [];
        shuffle(bingoList);
        for (let o = 0; o < 25; o++) {
            if (o === 12)
                table.push([o, false, "FREE"]);
            else
                table.push([o, false, bingoList[o]]);
        }
        return table;
    };

    handleUpdate = (i) => {
        this.table[i][1] = !this.table[i][1];
        saveTable(this.table);
    };

    handleReset = () => {
        this.setState({resetAnimation: " on"});
        sleep(500).then(() => {
            this.table = this.createTable();
            saveTable(this.table);
            this.setState({resetAnimation: ""});
        });
    };

    render() {
        return (
            <div className={"App resetAnimation" + this.state.resetAnimation}>
                <Bingo
                    handleUpdate={this.handleUpdate}
                    handleReset={this.handleReset}
                    data={this.table}
                />
            </div>
        );
    }
}

export default App;
