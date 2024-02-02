import { SudokuValues } from "../views/SudokuView";
import SudokuCell from "./SudokuCell";

type SudokuBoardProps = {
  values: SudokuValues;
  disabled: boolean;
  setValues: React.Dispatch<React.SetStateAction<SudokuValues>>;
}

const SudokuBoard = ({ values, disabled, setValues }: SudokuBoardProps) => {

  return <div className="board">
    {
      values.map((row, rIndex) => {
        return <div key={rIndex}>
          {
            row.map((col, cIndex) => {
              return (
                <SudokuCell
                  key={cIndex}
                  disabled={disabled}
                  value={col}
                  setValues={setValues}
                  values={values}
                  rIndex={rIndex}
                  cIndex={cIndex}
                />
              )
            })
          }
        </div>
      })
    }
  </div>
}

export default SudokuBoard;