import React, { useContext, useEffect, useState } from "react";
import { alpacaContext } from "../../context";
import './style.css'

export default function Style () {


    const {selectListStyle,setSelectListStyle,selectedStyle,setSelectedStyle,selectedAccessorize,paths,setPaths} = useContext(alpacaContext)

    const [data, setData] = useState(selectListStyle())

    useEffect(() => {
        setData(selectListStyle())
    },[selectedStyle,selectedAccessorize])


   function handleChange(each) {

        const newStyle = data

        for(let i = 0; i<newStyle.length; i++){
            if(newStyle[i].style == each.style){
                newStyle[i] = {...newStyle[i], selected: true} 
                setSelectedStyle(newStyle[i].style)
                for(let s = 0; s<paths.length; s++){
                    if(paths[s].classname === newStyle[i].classname){
                        const newPaths = paths
                        newPaths[s].path = newStyle[i].path;
                        setPaths(newPaths);
                        break;
                    }
                }
            }else{
                newStyle[i] = {...newStyle[i], selected: false}  
            }

        }

        
        setSelectListStyle(newStyle)
        
    }









    

    return(
        <div className="style">
            <div className="style-header">
                <h2>style</h2>
            </div>

            <div className="style-content">
                <ul>
                    {data.map( each => <li
                    key={each.style}
                    className={each.selected ? "active" : ""}
                    onClick = {() => handleChange(each)}
                    >

                    {each.style}
                    
                    </li>)}
                </ul>
            </div>
        </div>
    )
}