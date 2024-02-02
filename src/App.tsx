import './App.css';
import SudokuHeader from './layout/SudokuHeader';
import SudokuView from './views/SudokuView';

function App() {
  return (
    <div className="App">
      <SudokuHeader />
      <SudokuView />
    </div>
  );
}

export default App;
