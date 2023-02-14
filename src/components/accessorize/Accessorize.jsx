import React, { useContext, useEffect, useState } from "react";
import { alpacaContext } from "../../context";
import './accessorize.css'

export default function Accessorize () {


    const [accessorize,setAccessorize] =useState( [
        {name:"hair",selected:true},
        {name:"ears",selected:false},
        {name:"eyes",selected:false},
        {name:"mouth",selected:false},
        {name:"neck",selected:false},
        {name:"leg",selected:false},
        {name:"accessorize",selected:false},
        {name:"background",selected:false},
    ] )

    const {setSelectedAccessorize} = useContext(alpacaContext)

    function handleChange(each) {

        const newAccessorize =
          [
            {name:"hair",selected:false},
            {name:"ears",selected:false},
            {name:"eyes",selected:false},
            {name:"mouth",selected:false},
            {name:"neck",selected:false},
            {name:"leg",selected:false},
            {name:"accessorize",selected:false},
            {name:"background",selected:false},
        ]

        for(let i = 0; i<accessorize.length; i++){
            if(newAccessorize[i].name == each.name){
                newAccessorize[i] = {...each, selected: true}
                setSelectedAccessorize(newAccessorize[i].name)
                break;
            }
        }
        setAccessorize(newAccessorize)
    }



    return( 
        <div className="accessorizes">
            <div className="accessorize-header">
                <h2>accessorize</h2>
            </div>
            <div className="accessorize-content">
                <ul>
                    {accessorize.map( each => 

                     <li 
                     className= {each.selected ? "active" :  ""} 
                     onClick={() => handleChange(each)} 
                     key={each.name}
                     > {each.name} 
                     </li> )}
                    
                </ul>
            </div>
        </div>
    )
}