import React, {Component} from 'react';
import {bingoList} from './bingoList';
import shuffle from "shuffle-array";
import {checkTable, loadTable, saveTable} from "./localstorageManager";
import Bingo from "./Bingo";
import Fireworks from 'fireworks-react';
import {checkIfBingo} from './checkIfBingo';

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resetAnimation: "",
            bingo: false,
            bingoWin: "",
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
                table.push([o, true, "FREE"]);
            else
                table.push([o, false, bingoList[o]]);
        }
        return table;
    };

    handleUpdate = (i) => {
        this.table[i][1] = !this.table[i][1];
        saveTable(this.table);
        let bingo = checkIfBingo(this.table);
        this.setState({bingo: bingo});
        if (bingo)
            this.setState({bingoWin: " bingoWin"})
    };

    handleReset = () => {
        this.setState({resetAnimation: " resetAnimation", bingo: false, bingoWin: ""});
        sleep(500).then(() => {
            this.table = this.createTable();
            saveTable(this.table);
            this.setState({resetAnimation: ""});
        });
    };

    render() {
        const Firework = () => {
            const style = {
                position: 'absolute', left: 0, top: 0
            };
            if (this.state.bingo)
                return <div><Fireworks width={window.innerWidth} height={window.innerHeight} style={style}/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/U5TqIdff_DQ?controls=0&autoplay=true"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={false} style={style}/>
                </div>;
            else
                return ""
        };
        return (
            <div className={"App" + this.state.resetAnimation + this.state.bingoWin}>
                <Firework/>
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
