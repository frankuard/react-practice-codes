import React, {useState} from 'react'

type FormState = {
        email: string;
        phone : string;
    };


const event = () => {

    // const [Name, setName] = useState("Roshan");
    


    const [form, setform] = useState<FormState>({email:"",phone:""})

    // const handleMouseOver = () => {
    //     alert("Hello I am mouse hover")
    // }

    const handleClick = () => {
        
        alert("Hello I am Clicked")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setform({...form,[e.target.name]:e.target.value})
        console.log(form)
    }


  return (
    <>
    <div className="button" onClick={handleClick}>
        <button >Click Me</button>
    </div>
  {/* <div className="red  bg-red-600 text-white" onMouseOver={handleMouseOver}>
    I am a Red Div
  </div> */}


  <input type="text" name='email' value={form.email} onChange={handleChange} placeholder='Name'/>
  <input type="text" name='phone' value={form.phone} onChange={handleChange} placeholder='Phone'/>


  </>
  )
}

export default event

