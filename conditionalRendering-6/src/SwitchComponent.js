import React from 'react'
import Operations from './Operations'
import Person from './Person'
import Recipe from './Recipe'
import Ternary from './Ternary'

function SwitchComponent({componentadı}) {


    switch(componentadı){
        case "operations":
            return <Operations/>
        case "person":
             return <Person/>
        case "ternary":
             return <Ternary/>
        case "recipe":
            return <Recipe/>                
        default: return null
    }
}

export default SwitchComponent