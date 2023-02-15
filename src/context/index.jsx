import React , { createContext, useState} from "react";

import blue50 from "../assets/backgrounds/blue50.png"
import blue70 from "../assets/backgrounds/blue70.png"
import blue60 from "../assets/backgrounds/blue60.png"
import darkblue30 from "../assets/backgrounds/darkblue30.png"
import darkblue50 from "../assets/backgrounds/darkblue50.png"
import darkblue70 from "../assets/backgrounds/darkblue70.png"
import green50 from "../assets/backgrounds/green50.png"
import green60 from "../assets/backgrounds/green60.png"
import green70 from "../assets/backgrounds/green70.png"
import grey40 from "../assets/backgrounds/grey40.png"
import grey70 from "../assets/backgrounds/grey70.png"
import grey80 from "../assets/backgrounds/grey80.png"
import red50 from "../assets/backgrounds/red50.png"
import red60 from "../assets/backgrounds/red60.png"
import red70 from "../assets/backgrounds/red70.png"
import yellow50 from "../assets/backgrounds/yellow50.png"
import yellow60 from "../assets/backgrounds/yellow60.png"
import yellow70 from "../assets/backgrounds/yellow70.png"

// accessorize Path
import accearings from "../assets/accessories/earings.png";
import accflower from "../assets/accessories/flower.png";
import accglasses from "../assets/accessories/glasses.png";
import accheadphone from "../assets/accessories/headphone.png";

// ears Path
import earsDefault from "../assets/ears/default.png";
import earstiltbackward from "../assets/ears/tiltbackward.png";
import earstiltforward from "../assets/ears/tiltforward.png";

// eyes path
import eyesDefault from "../assets/Eyes/default.png"
import eyesangry from "../assets/Eyes/angry.png"
import eyesnaughty from "../assets/Eyes/naughty.png"
import eyespanda from "../assets/Eyes/panda.png"
import eyessmart from "../assets/Eyes/smart.png"
import eyesstar from "../assets/Eyes/star.png"

//hair path
import hairDefault from "../assets/hair/default.png"
import hairbang from "../assets/hair/bang.png"
import haircurls from "../assets/hair/curls.png"
import hairelegant from "../assets/hair/elegant.png"
import hairfancy from "../assets/hair/fancy.png"
import hairshort from "../assets/hair/short.png"
import hairquiff from "../assets/hair/quiff.png"


// leg
import legDefault from "../assets/leg/default.png"
import legbubbletea from "../assets/leg/bubble-tea.png"
import legcookie from "../assets/leg/cookie.png"
import legtiltforward from "../assets/leg/tilt-forward.png"
import leggameconsole from "../assets/leg/game-console.png"
import legtiltbackward from "../assets/leg/tilt-backward.png"

//mouth
import mouthDefault from "../assets/mouth/default.png"
import mouthastonished from "../assets/mouth/astonished.png"
import moutheating from "../assets/mouth/eating.png"
import mouthlaugh from "../assets/mouth/laugh.png"
import mouthtongue from "../assets/mouth/tongue.png"

// neck
import neckDefault from "../assets/neck/default.png"
import neckbendbackward from "../assets/neck/bend-backward.png"
import neckbendforward from "../assets/neck/bend-forward.png"
import neckthick from "../assets/neck/thick.png"


import nose from "../assets/nose.png"

const alpacaContext = createContext()


function AlpacaContextProvider({children}) {


const [selectedAccessorize, setSelectedAccessorize] = useState("hair")
const [selectedStyle, setSelectedStyle] = useState("default")

const [hairStyle,setHairStyle] = useState([
    {classname:"hair",style: 'default',selected:true,path:hairDefault},
    {classname:"hair",style: 'bang',selected:false,path:hairbang},
    {classname:"hair",style: 'curls',selected:false,path:haircurls},
    {classname:"hair",style: 'elegant',selected:false,path:hairelegant},
    {classname:"hair",style: 'fancy',selected:false,path:hairfancy},
    {classname:"hair",style: 'quiff',selected:false,path:hairquiff},
    {classname:"hair",style: 'short',selected:false,path:hairshort},
])

const [earsStyle,setEarsStyle] = useState([ 
    {classname:"ears",style: 'default',selected:true,path:earsDefault},
    {classname:"ears",style: 'tilt-backward',selected:false,path:earstiltbackward},
    {classname:"ears",style: 'tilt-forward',selected:false,path:earstiltforward},
])
const [eyesStyle, setEyesStyle] = useState([
    {classname:"eyes",style: 'default',selected:true,path:eyesDefault},
    {classname:"eyes",style: 'angry',selected:false,path:eyesangry},
    {classname:"eyes",style: 'naughty',selected:false,path:eyesnaughty},
    {classname:"eyes",style: 'panda',selected:false,path:eyespanda},
    {classname:"eyes",style: 'smart',selected:false,path:eyessmart},
    {classname:"eyes",style: 'star',selected:false,path:eyesstar},
])
const [mouthStyle,setMouthStyle] = useState([
    {classname:"mouth",style: 'default',selected:true, path:mouthDefault},
    {classname:"mouth",style: 'astonished',selected:false, path:mouthastonished},
    {classname:"mouth",style: 'eating',selected:false, path:moutheating},
    {classname:"mouth",style: 'laugh',selected:false, path:mouthlaugh},
    {classname:"mouth",style: 'tongue',selected:false, path:mouthtongue},
])
const [neckStyle, setNeckStyle] = useState( [
    {classname:"neck", style: 'default',selected:true,path:neckDefault},
    {classname:"neck", style: 'bend-backward',selected:false,path:neckbendbackward},
    {classname:"neck", style: 'bend-forward',selected:false,path:neckbendforward},
    {classname:"neck", style: 'thick',selected:false,path:neckthick},
])
const [legStyle, setLegStyle] = useState([                
    {classname:"leg",style: 'default',selected:true,path:legDefault},
    {classname:"leg",style: 'bubble-tea',selected:false,path:legbubbletea},
    {classname:"leg",style: 'cookie',selected:false,path:legcookie},
    {classname:"leg",style: 'tilt-forward',selected:false,path:legtiltforward},
    {classname:"leg",style: 'game-console',selected:false,path:leggameconsole},
    {classname:"leg",style: 'tilt-backward',selected:false,path:legtiltbackward},
        ])
const [accessorizeStyle, setAccessorizeStyle] = useState([            
    {classname:"accessorize",style: 'none',selected:true,path:""},
    {classname:"accessorize",style: 'earings',selected:false,path:accearings},
    {classname:"accessorize",style: 'flower',selected:false,path:accflower},
    {classname:"accessorize",style: 'glasses',selected:false,path:accglasses},
    {classname:"accessorize",style: 'headphone',selected:false,path:accheadphone},
])
const [backgroundStyle, setBackgroundStyle] = useState([ 
    {classname:"background",style: 'blue50',selected:true,path:blue50},
    {classname:"background",style: 'blue60',selected:false,path:blue70},
    {classname:"background",style: 'blue70',selected:false,path:blue60},
    {classname:"background",style: 'darkblue30',selected:false,path:darkblue30},
    {classname:"background",style: 'darkblue50',selected:false,path:darkblue50},
    {classname:"background",style: 'darkblue70',selected:false,path:darkblue70},
    {classname:"background",style: 'green50',selected:false,path:green50},
    {classname:"background",style: 'green60',selected:false,path:green60},
    {classname:"background",style: 'green70',selected:false,path:green70},
    {classname:"background",style: 'grey40',selected:false,path:grey40},
    {classname:"background",style: 'grey70',selected:false,path:grey70},
    {classname:"background",style: 'grey80',selected:false,path:grey80},
    {classname:"background",style: 'red50',selected:false,path:red50},
    {classname:"background",style: 'red60',selected:false,path:red60},
    {classname:"background",style: 'red70',selected:false,path:red70},
    {classname:"background",style: 'yellow50',selected:false,path:yellow50},
    {classname:"background",style: 'yellow60',selected:false,path:yellow60},
    {classname:"background",style: 'yellow70',selected:false,path:yellow70},
])

const [paths,setPaths] = useState([
    {classname: "background",path:blue50},
    {classname: "ears",path:earsDefault},
    {classname: "neck",path:neckDefault},
    {classname: "nose",path:nose},
    {classname: "hair",path:hairDefault},
    {classname: "mouth",path:mouthDefault},
    {classname: "leg",path:legDefault},
    {classname: 'eyes',path:eyesDefault},
    {classname: "accessorize",path:""},
]) 


function selectListStyle() {
    switch(selectedAccessorize) {
        case "hair":
            return hairStyle
        case "ears":
            return earsStyle
        case "eyes":
            return eyesStyle
        case "mouth":
            return mouthStyle
        case "neck":
            return neckStyle
        case "leg":
            return  legStyle
        case "accessorize":
            return  accessorizeStyle
        case "background":
            return backgroundStyle
    }
}

function setSelectListStyle (style) {

    switch(selectedAccessorize) {
        case "hair":
            setHairStyle(style);
            break;
        case "ears":
            setEarsStyle(style);
            break;
        case "eyes":
            setEyesStyle(style);
            break;
        case "mouth":
            setMouthStyle(style);
            break;
        case "neck":
            setNeckStyle(style);
            break;
        case "leg":
            setLegStyle(style);
            break;
        case "accessorize":
            setAccessorizeStyle(style);
            break;
        case "background":
            setBackgroundStyle(style);
            break;
    }
}

function randomAlpaca() {
    const [newTest,setNewTest] = [
        [hairStyle,earsStyle,eyesStyle,mouthStyle,neckStyle,legStyle,accessorizeStyle,backgroundStyle],
        [setHairStyle,setEarsStyle,setEyesStyle,setMouthStyle,setNeckStyle,setLegStyle,setAccessorizeStyle,setBackgroundStyle],
]


   newTest.map((each,index) => {

        let newListStylePaths = each.map( each => ({...each, selected:false }))
        let randomNumber = Math.floor(Math.random() * newListStylePaths.length)
        newListStylePaths[randomNumber].selected = true;
        setNewTest[index](newListStylePaths)
        setSelectedStyle(newListStylePaths[randomNumber].style)


        paths.map(eachpath => {
            if(eachpath.classname === newListStylePaths[1].classname){
                eachpath.path = newListStylePaths[randomNumber].path
            }
        });

    


    })
   


}


return(

    <alpacaContext.Provider
        value={
            
                {
                    selectedAccessorize,
                    setSelectedAccessorize,
                    selectedStyle,
                    setSelectedStyle,
                    selectListStyle,
                    setSelectListStyle,
                    paths,
                    setPaths,
                    randomAlpaca
                }
            
        }
        >
        {children}
    </alpacaContext.Provider>
    )
}


export {AlpacaContextProvider,alpacaContext }