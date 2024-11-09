import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';

function App() {
  console.log('App rendering')

  return (
    <div className="App">
      <AppTitle title={'this is component'}/>
      <Rating value={2}/>
      <Accordion titleValue={'Menu'} collapsed={false}/>
      <Rating value={4}/>
      <Accordion titleValue={'Users'} collapsed={false}/>
    </div>
  );
}

type AppTitlePropsType = {
  title:string
}

export function AppTitle(props:AppTitlePropsType) {
  console.log('AppTitle rendering')
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

export default App;
