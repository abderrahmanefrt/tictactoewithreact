"use client";

import { useEffect, useState } from "react";
import Cell from "./comp/cell";
import { Combo } from "next/font/google";

const winningcombos=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

]

export default function Home() {
  const [cells,setcells]=useState(["","","","","","","","",""])
  const [go,setgo]=useState("circle");
 const [winningmessage,setwinningmessage]=useState("")
  useEffect(()=>{
    winningcombos.forEach((Combo)=>{
      const circlewins=Combo.every((cell) =>cells[cell]==="circle")
      const crosswins=Combo.every((cell) =>cells[cell]==="cross")
      if(circlewins){

setwinningmessage("circlewin!")

      }else if (crosswins){
        setwinningmessage("crosswin!")
      }
    })

  },[cells,winningmessage])
  useEffect(()=>{
    if (cells.every((cell)=>cell !== "")&& !winningmessage){
      setwinningmessage("DRAW!");
    }

  },[cells,winningmessage])
  return (
    <div className="cont">
      <div className="gameboard">
        {cells.map((cell,index)=> (
          <Cell id={index} go={go} setgo={setgo} key={index} cells={cells} setcells={setcells} cell={cell} winningmessage={winningmessage}/>
        ))}
        

      </div>
    
      <div>{winningmessage}</div>
      {!winningmessage && <div>{`its now ${go} turn`}</div>}
    </div>
  );
}
