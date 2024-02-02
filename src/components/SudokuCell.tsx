import { useState, ChangeEvent, useEffect } from "react";
import { SudokuValues } from "../views/SudokuView";

type SudokuCellProps = {
    setValues: React.Dispatch<React.SetStateAction<SudokuValues>>;
    disabled: boolean;
    value: number;
    values: SudokuValues;
    rIndex: number;
    cIndex: number;
}

const SudokuCell = ({disabled, value, setValues, values, rIndex, cIndex}: SudokuCellProps) => {
    const [inputValue, setInputValue] = useState<number>(value)
    
    useEffect(() => {
        setInputValue(value);
    },[value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        let newValues = values;
        newValues[rIndex][cIndex] = value;
        setInputValue(value);
        setValues(newValues);
    }

    return <div className="cell">
        <input type="number" min="1" max="9" disabled={disabled} value={inputValue === 0 ? "" : inputValue} onChange={handleChange}/>
    </div>
}

export default SudokuCell;