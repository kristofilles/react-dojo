import { SudokuValues } from "../views/SudokuView";

// check new value
const checkNewValue = ({table, row, col, num} : {table: SudokuValues; row: number; col: number, num: number}) =>{

    // check row
    for (let x = 0; x < table.length; x++) {
        if (x !== col && table[row][x] === num) {
            return false;
        }
    }

    // check column
    for (let x = 0; x < table.length; x++) {
        if (x !== row && table[x][col] === num)
            return false;
    }

    // check 3x3 grid
    let startRow = row - row % 3;
    let startCol = col - col % 3;

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if ((startRow + i) !== row && (startCol + j) !== col && table[startRow + i][startCol + j] === num)
                return false;

    return true;
}

const solve = ({table, row, col}: {table: SudokuValues; row: number; col:number}): boolean => {

    // done
    if (row === table.length - 1 && col === table.length) {
        return true;
    }

    // next row
    if (col === table.length) {
        row++;
        col = 0;
    }

    // already filled - move on to next cell
    
    if (table[row][col] !== 0) {
        if (!checkNewValue({table, row, col, num: table[row][col]})) {
            return false;
        } else {
            return solve({table, row, col: col + 1});
        }
    }
    

    for (let num = 1; num < 10; num++) {

        if (checkNewValue({table, row, col, num})) {

            table[row][col] = num;
            //printTable(table); // TODO remove
            console.log("table");

            // move on to next cell
            if (solve({table, row, col: col + 1})) {
                return true;
            }
        }

        // remove assigned number
        table[row][col] = 0;
    }

    return false;
}

export const  backTracking = async (table: SudokuValues): Promise<boolean> => {
    return new Promise((resolve) => {
        resolve(solve({table, row: 0, col: 0}));
    });
}
