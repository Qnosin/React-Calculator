const Window = ({result,isSum}) => {
    let sum = -1
    if(isSum === true){
        try{
            // eslint-disable-next-line no-eval
            console.log(eval(result.join("")))
            // eslint-disable-next-line no-eval
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