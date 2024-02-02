import { useState } from "react";
import SudokuBoard from "../components/SudokuBoard";
import Error from "../components/Error";
import Button from "../components/Button";
import initSudokuValues from "../utility/initSudokuValues";
import { backTracking } from "../utility/sudokuAlgorithm";

export type SudokuValues = (number)[][];

const SudokuView = () => {
    const SUDOKU_BOARD_SIZE = 9;
    const initialBoard = initSudokuValues(SUDOKU_BOARD_SIZE);
    const [values, setValues] = useState<SudokuValues>(initialBoard);
    const [disabled, setDisabled] = useState(false);
    const [hasError, setHasError] = useState(false);

    const startSudoku = async () => {
        setDisabled(true);
        const solved = await backTracking(values);
        setHasError(!solved);
    }

    const restartSudoku = () => { 
        setValues(initialBoard);
        setDisabled(false);
        setHasError(false);
    }

    return <div className="view">
        <SudokuBoard values={values} disabled={disabled} setValues={setValues}/>
        <Button callback={startSudoku} disabled={disabled} label="START"/>
        {
            disabled && <Button callback={restartSudoku} disabled={false} label="RESTART"/>
        }
        {
            hasError && <Error message={"Can not be solved!"}></Error>
        }
    </div>
}

export default SudokuView;