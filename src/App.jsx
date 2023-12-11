import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [data, setData] = React.useState({
    personal: {
      name: "",
      lastName: "",
      email: "", 
      phone: "",
      age: "" 
    },
    education: {

    },
    experience: {
      
    }
  });
  
  return (
    <div className="container" data={data}>
      <Form/>
    </div>
  )
}

export default App
