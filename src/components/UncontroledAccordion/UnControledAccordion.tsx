import React, { useState } from 'react';

type UnControledAccordion = {
    titleValue: string
    collapsed?: boolean
}

export function UnControledAccordion(props: UnControledAccordion) {
    console.log('Accordion rendering')

    const [collapsed,setCollapsed]= useState(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>{setCollapsed(false)}}>uncontrol</button>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <>
            <h3>--{props.title}--</h3>
        </>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
} 