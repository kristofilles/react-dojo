import { SudokuValues } from "../views/SudokuView";

const initSudokuValues = (size: number): SudokuValues => {
    let outterArray: SudokuValues = [];
    for (let i = 0; i < size; i++) {
        let row: (number)[] = [];
        for (let j = 0; j < size; j++) {
            row.push(0);     
        }
        outterArray.push(row)
    }
    return outterArray;
};

export default initSudokuValues;