import { useState } from "react"

function Contact() {

  const [form , setForm]= useState({
    userName:"",
    userMessage:""
  })

  

  const handleChange = (e)=>
  {
    setForm(
      {
        ...form,
        [e.target.name]: e.target.value,
      }
    );
  };

  const handleSubmit = (e)=>
  {
    e.preventDefault();
    if (!form.userName.trim()) {
      alert('Please enter your name');
      return;
    }
    console.log("Form submited succesfully",form);

    setForm({userName:"",
      userMessage:"",
    });


  };

  return (
    <>
    <h1>Contact Page</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Enter your name : </label>
        <input name="userName" type="text" id="userName"
        placeholder="type here"
        onChange={handleChange}
        value={form.userName}></input>
      </div>
      <div>
        <label htmlFor="userMessage">Message : </label>
        <textarea name="userMessage" type="text" id="userMessage"
        placeholder="type here"
        value={form.userMessage}
        onChange={handleChange}></textarea>

      </div>
      <div>
        <button type= " submit">Submit</button>
      </div>
    </form>
    </>
  )
}

export default Contact