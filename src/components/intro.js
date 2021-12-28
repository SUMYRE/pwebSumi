import React, {useState, useEffect} from "react"
import "@fontsource/nunito"
import { css, jsx} from "@emotion/react";
import {cx, keyframes} from "@emotion/css"

const key = keyframes(
    `from {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100vh"
    }, to {
        height: "100vh"
    }`
)

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
];/*
let anim = [
    { text: "_", timer: 200},
    { text: " ", timer: 200},
    { text: "_", timer: 200},
    { text: " ", timer: 200},
    { text: "_", timer: 200},
    { text: "_D_", timer: 30},
    { text: "_DE_", timer: 30},
    { text: "_DEE", timer: 30},
    { text: "_DEEZ", timer: 30},
    { text: " ", timer:30},
    { text: " N_", timer:30},
    { text: " NU_", timer:30},
    { text: " NUT", timer:30},
    { text: " NUTZ", timer:30}
];*/


let animp2 = [
    { text: " ", timer:30},
    { text: " S_", timer:30},
    { text: " SU_", timer:30},
    { text: " SUM", timer:30},
    { text: " SUMI", timer:30}
];/*
let animp2 = [
    { text: " ", timer:30},
    { text: " N_", timer:30},
    { text: " NU_", timer:30},
    { text: " NUT", timer:30},
    { text: " NUTZ", timer:30}
];*/

export default function Intro() {

    const [text, setText] = useState("_")
    const [text2, setText2] = useState("")
    const [counter, setCounter] = useState(0)
    const [pos, setPos] = useState("100vh")
    const [textS, setTextS] = useState(74)
    
    useEffect(() => {
       updateText()
    },[counter])

    const updateText = () => {
        if(counter<anim.length) {
            if(counter<11) {
                setText(anim[counter].text)
            }
            else if(counter-11<animp2.length){
                setText(anim[11].text)
                setText2(animp2[counter-11].text)
                console.log(anim[10].text+animp2[counter-11].text)
            }
            setTimeout(()=> {
                setCounter(prevCounter => prevCounter +1)
            },anim[counter].timer)
        }
        else {
            setTimeout(()=> {
                setPos("10vh")
                setTextS(34)
            },500)
        }
    }
    /*const updateText = () => {
        if(counter<anim.length) {
            if(counter<9) {
                setText(anim[counter].text)
            }
            else if(counter-8<animp2.length){
                setText(anim[8].text)
                setText2(animp2[counter-8].text)
                console.log(anim[8].text+animp2[counter-9].text)
            }
            setTimeout(()=> {
                setCounter(prevCounter => prevCounter +1)
            },anim[counter].timer)
        }
    }*/

    return(
        <div style={{...styles.center, height: pos}}>
            <span style={{...styles.text2, fontSize: textS}}>{text}</span>
            <span style={{...styles.text1, fontSize: textS}}>{text2}</span>
        </div>
    )       
}

const styles = {
    text1: {
        color: "#6AA84F",
        //color: 'intro',
        backgroundColor: 'transparent',
        fontFamily: "nunito",
        transition: `all 0.2s ease`
    },

    text2: {
        color: "#000000",
        backgroundColor: 'transparent',
        fontFamily: "nunito",
        transition: `all 0.2s ease`
    },

    center: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        transition: "all 0.27s ease"
    },
}
