export const useDescheckByClic = () => {

  //changeFilterStatusInitial checkbox 
  const uncheck =(e)=>{
    return e.target.checked=false;
  }
    //select check box 
  const check =(e)=>{
    return e.target.checked=true;
  }

  return {
    uncheck,
    check
  }
}
