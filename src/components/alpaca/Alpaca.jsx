import React, { useContext, useEffect, useRef } from "react";
import html2canvas from "html2canvas"
import "./alpaca.css"

import { alpacaContext } from "../../context";

export default function Alpaca () {

  const {paths,randomAlpaca} = useContext(alpacaContext)
  const imgRef = useRef()
  
function convertToImage() {
  html2canvas(imgRef.current).then(function (canvas){
    const url = canvas.toDataURL("image/png", Option);
    document.getElementById("test").setAttribute('href', url);
    document.getElementById("test").setAttribute('download',"my-alpaca.png");
    document.getElementById("test").click();
  })

}





    return(
        <div className="alpaca">
              <a href="" id="test" style={{display:"none"}}></a>
              <div className="img" ref={imgRef}>

                    {paths.map(path => (<img className={path.classname} key={path.classname} src={path.path} />))}
                
              </div>
              <div className="buttons">
                <button className="download" onClick={() => convertToImage()}>Download</button>
                <button className="random" onClick={() => randomAlpaca()}>Random</button>
              </div>
        </div>
    )
}