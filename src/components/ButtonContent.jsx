// Change Prop drilling with context in future

import Button from "./Button";
const ButtonContent = ({setResult,result,setisSum,isSum}) => {
    const clearHandle = () =>{
        setResult([])
        setisSum(false)
    }
    return ( 
        <div className="container">
            <div className="line final">
            <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={0}></Button>
            <Button setisSum={setisSum} result={result} setResult={setResult} value={"="}></Button>
            </div>
            <div className="line">
                <Button setisSum={setisSum} isSum={isSum} result={result} setResult={setResult} value={'9'}></Button>
                <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={'8'}></Button>
                <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={'7'}></Button>
                <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={"/"}></Button>
            </div>
            <div className="line">
                <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={6}></Button>
                <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={5}></Button>
                <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={4}></Button>
                <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={"*"}></Button>
            </div>
            <div className="line">
                <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={3}></Button>
                <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={2}></Button>
                <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={1}></Button>
                <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={"+"}></Button>
            </div>
            <div className="line">
            <button onClick={clearHandle} className="clear" type="submit">Clear</button>
            <Button setisSum={setisSum} isSum={isSum}  result={result} setResult={setResult} value={"-"}></Button>
            </div>
        </div>
     );
}
 
export default ButtonContent;