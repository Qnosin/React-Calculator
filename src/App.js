import  { useState } from 'react';
import ButtonContent from './components/ButtonContent';
import Window from './components/Window';
function App() {
  const [result,setResult] = useState([]);
  const [isSum,setisSum] = useState(false);
  return (
    <div className="App">
        <div className='content'>
            <Window setResult={setResult} result={result} ></Window>
            <ButtonContent isSum={isSum} setisSum={setisSum} result={result} setResult={setResult}></ButtonContent>
        </div>
    </div>
  );
}

export default App;
