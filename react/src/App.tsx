// IMPORTING COMPONENTS 

// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Card from './components/Card'
// import Button from './components/button'

import Event from './components/event'

// import { useState } from 'react'
import './App.css'

// ASSIGNING TYPES FOR PROPS
// type TodoProps = {
//   todo:{
//     title : string
//     desc : string
//   } 
// }
 function App() {

//   // CONDITIONAL RENDERING 
//   const [showBtn,setshowBtn] = useState(false);

//   /// RENDERING LIST 
//   const [todos, settodos] = useState([{
//     id: 1,
//     title: "Hey",
//     desc: "I am good boy"
//   },{
//     id : 2,
//     title: "Hey, Another Todo",
//     desc: "I am good programmer"
//   },
// {
//     id : 3,
//     title: "Ich bin Roshan",
//     desc: "ich bin ein guter junge"
//   }])

  // PROPS BDEFINITION FOR TODO COMPONENT PROPS (TSX OR TYPESCRIPT)


  //THIS IS A COMPONENT THAT RECIEVES DATA VIA PROPS AND DISPALY A SINGLE TODO
  // const Todo = ({todo}: TodoProps) => {
  //   return(<>

  //     {/* <div className="m-4 border-2">
  //        <div className="todo">{todo.title}</div>
  //        <div className="todo ">{todo.desc}</div>
  //    </div> */}

   
  // //   </>)
  // // }


  return (
    <>
{/* 
BUTTON CONNECTING WITH ANTOHER ONE */}

{/* THIS BUTTON TOGGGLES VISIBILITY OF ANOTHER BUTTON */}

{/* {showBtn?<button> I will be shown only when another btn is clicked</button>: "NO!"} */}


{/* {showBtn && <button> I will be shown only when another btn is clicked</button>} */}

{/* 
 LOOPING THROUGH THE TODOS ARRAY AND RENDERING EACH ITEM DYNAMICALLY  */}


{/* {todos.map((item)=>{

  // return <Todo key ={index} todo= {item}/>
// displaying the things of rendering list 
  return  <div className="m-4 border-2 border-purple-400" 
  key={item.id}>
       <div className="todo">{item.title}</div>
       <div className="todo ">{item.desc}</div>
     </div>
  
})} */}

<div className="cards ">

   {/* TOGGLES SHOWBTN STATE (TRUE TO FALSE AND VICE VERSA) */}

  {/* <button onClick={() => setshowBtn(!showBtn)}>Show Button</button> */}
  
  </div>

 

{/* 
 CARDS USING PROPS FROM CARD COMPONENT  */}

 {/* RENDERING MULITPLE CARD COMPONENTS USING PROPS */}


    {/* <Navbar color = "cyan"/>
    <div className="cards">
    <Card title = "Card 1" description= "This is a description"/>
    <Card title = "Card 2" description="This is a description"/>
    <Card title = "Card 3" description="This is a description"/>
    <Card title = "Card 4" description="This is a description"/>
    </div>
<Button />
    <Footer /> */}

     <Event />
    </>

  )
}

export default App


