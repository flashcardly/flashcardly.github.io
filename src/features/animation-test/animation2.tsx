import React, { useEffect, useRef } from "react";

export const B = () => {
  const squareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      squareRef.current?.animate([{transform: 'rotateY(0deg)'}, {transform: 'rotateY(180deg)'}],{duration:800}) 
      .finished
      .then(() => {
          (squareRef.current!).style.transform = 'rotateY(180deg)';
      })
     
  })

  return (
    <div>
      <div style={{ backgroundColor: "rosybrown", perspective: "1000px", width: "500px", height: "300px" }}>
        <div ref={squareRef} style={{position:"relative",transformStyle: "preserve-3d", width: "100%", height: "100%" }}>
          <div
          style={{position:"absolute", left:"0", top:"0", backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden", backgroundColor: "blue",width: "100%", height: "100%", textAlign:"center" }}>Front</div>
          <div
          style={{position:"absolute", left:"0", top:"0", backfaceVisibility:"hidden",  WebkitBackfaceVisibility:"hidden", backgroundColor: "red", width: "100%", height: "100%", textAlign:"center", transform:"rotateY(180deg)"}}>Back</div>
        </div>
      </div>
    </div>
  )
}

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card