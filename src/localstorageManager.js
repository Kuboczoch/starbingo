const item = 'starbingo';

function saveTable(data) {
    localStorage.setItem(item, JSON.stringify(data));
}

function loadTable() {
    return JSON.parse(localStorage.getItem(item));
}

function checkTable() {
    return loadTable() !== null;
}

export {checkTable, loadTable, saveTable};
