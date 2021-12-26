import React, {useState, useEffect} from "react"
import { render } from "react-dom";
import ReactDOM from 'react-dom'

let anim = [
    { text: "_", timer: 200},
    { text: " ", timer: 200},
    { text: "_", timer: 200},
    { text: " ", timer: 200},
    { text: "_", timer: 200},
    { text: "_P_", timer: 30},
    { text: "_PR_", timer: 30},
    { text: "_PRO", timer: 30},
    { text: "_PROJ", timer:30},
    { text: "_PROJE_", timer:30},
    { text: "_PROJEC_", timer:30},
    { text: "_PROJECT", timer:30},
    { text: " ", timer:30},
    { text: " S_", timer:30},
    { text: " SU_", timer:30},
    { text: " SUM", timer:30},
    { text: " SUMI", timer:30},
];

let animp2 = [
    { text: " ", timer:30},
    { text: " S_", timer:30},
    { text: " SU_", timer:30},
    { text: " SUM", timer:30},
    { text: " SUMI", timer:30}
];

export default function Intro() {

    const [text, setText] = useState("_")
    const [text2, setText2] = useState("_")
    const [counter, setCounter] = useState(0)
    
    useEffect(() => {
       updateText()
    },[counter])

    const updateText = () => {
        if(counter<anim.length) {
            if(counter<11) {
                setText(anim[counter].text)
            }
            else if(counter-11<animp2.length){
                setText(anim[10].text)
                setText2(animp2[counter-11].text)
                console.log(anim[10].text+animp2[counter-11].text)
            }
            setTimeout(()=> {
                setCounter(prevCounter => prevCounter +1)
            },anim[counter].timer)
        }
    }

    return(
        <h1>{text}{text2}</h1>
    )
}

/*const styles = {
    header: {
        color

    }
}*/