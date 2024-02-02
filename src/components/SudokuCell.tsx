import { ChangeEvent } from "react";
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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let newValues = values;
        newValues[rIndex][cIndex] = Number(event.target.value);
        setValues(newValues);
    }

    return <div className="cell">
        <input type="number" disabled={disabled} defaultValue={value === 0 ? "" : value} onChange={handleChange}/>
    </div>
}

export default SudokuCell;