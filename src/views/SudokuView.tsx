import { useState } from "react";
import SudokuBoard from "../components/SudokuBoard";
import Button from "../components/Button";
import initSudokuValues from "../utility/initSudokuValues";

export type SudokuValues = (number)[][]

const SudokuView = () => {
    const SUDOKU_BOARD_SIZE = 9;
    const initialBoard = initSudokuValues(SUDOKU_BOARD_SIZE);
    const [values, setValues] = useState<SudokuValues>(initialBoard);
    const [disabled, setDisabled] = useState(false);


    const startSudoku = () => {
        console.log("sudoku started");
        setDisabled(!disabled);
        // const calculatedValues = await calc fn
        // setValues(calculatedValues);
        // setDisabled(!disabled);
    }

    return <div className="view">
        <SudokuBoard values={values} disabled={disabled} setValues={setValues}/>
        <Button callback={startSudoku} disabled={disabled} label="START"/>
    </div>
}

export default SudokuView;