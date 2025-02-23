import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import { UnControledAccordion } from './components/UncontroledAccordion/UnControledAccordion';

function App() {
    console.log('App rendering')

    return (
        <div className="App">


            <OnOff/>
            <UnControledAccordion titleValue={'uncontrol'}/>
            <UnControledAccordion titleValue={'uncontrol'}/>


            {/* <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/> */}
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

export function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering')
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}

export default App;
