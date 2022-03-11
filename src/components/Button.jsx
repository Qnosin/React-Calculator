const Button = ({result,setResult,value,setisSum,isSum}) => {
    const clickHandler = (e)=>{
      let clickedValue = e.target.textContent;

      if(isSum === true && clickedValue !== "="){
        setisSum(false)
        setResult([])
    }
      if(clickedValue === "=" && result.length > 0){
          setisSum(true);
      }else if( clickedValue !== "="){
        setResult(result=>[...result,clickedValue])
      }
    }
    return (
        <div onClick={(e)=> clickHandler(e)} className={value === "=" ? "button sum" : "button"}>{value}</div>
      );
}
 
export default Button;