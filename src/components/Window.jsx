const Window = ({result,isSum}) => {
    let sum = -1
    if(isSum === true){
        try{
            console.log(eval(result.join("")))
            sum = eval(result.join(""))

        }catch(err){
            sum = 0;
        }
    }
    return (
        <div className="Window">
            <h3>{sum !== -1 ? sum : result.length === 0 ? "Waiting for numbers": result}</h3>
        </div>
      );
}
 
export default Window;