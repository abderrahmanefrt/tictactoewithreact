import { type } from 'os';
import { Dispatch,SetStateAction } from 'react';
import React from 'react';
type Cellprops={
  cells:string[]
  setcells:Dispatch<SetStateAction<string[]>>;
  id :number;
  go :string;
  setgo: Dispatch<SetStateAction<string>>;
  cell:string;
  winningmessage:string;
}
const Cell = ({go, setgo ,id,cells,setcells,cell,winningmessage}:Cellprops) => {
const handleclick= ()=>{
  if(winningmessage)
  {
    return;
  }
   const taken=!!cells[id]
   if(!taken){
    if (go==="circle"){
      handlecellchange("circle")
      setgo("cross")
  
     }else if(go==="cross"){
      handlecellchange("cross")
      setgo("circle")
  
     }

   }
   
}
const handlecellchange=(celltochange:string)=>{
  let copycells =[...cells]
  copycells[id]=celltochange
  setcells(copycells)

}

  return (
    <div className='sqr' onClick={handleclick}>
      <div className={cell}>{cell ?( cell==="circle"?"o":"X"):""}</div>
    </div>
  );
}

export default Cell;
