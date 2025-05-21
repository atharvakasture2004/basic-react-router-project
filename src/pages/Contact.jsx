import { useState,useEffect, useRef, useReducer } from "react"
import Cookies from 'js-cookie';
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import app from './firebase'



function Contact() {
  

  

  const [submit,setSubmit]=useState(false);

  const inputRef= useRef(null);

  const writeData = async()=>{
    const result = await addDoc(collection(firestore,"users"),{
      userName: form.userName,
      userMessage: form.userMessage,
    });
    console.log(result);
  }

  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  useEffect(()=>{
    const savedName = localStorage.getItem('userName');
    if(savedName)
    {
      setForm((prev)=>({...prev, userName: savedName}));
    }

  },[])

  

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
    writeData();
    console.log("Form submited succesfully",form);
    localStorage.setItem('userName',form.userName);
    sessionStorage.setItem('userName',form.userName);
    Cookies.set('formSubmissions',(parseInt(Cookies.get('formSubmissions') || '0')+1).toString(), {expires : 7}
  );
  setSubmit(true);
  setTimeout(()=> setSubmit(false),3000)



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
        value={form.userName}
        ref={inputRef}></input>
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

      <div>
        {submit && <p>Message Sent!</p>}
      </div>
    </form>
    </>
  )
}

export default Contact