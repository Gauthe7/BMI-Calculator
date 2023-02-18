
import './App.css';
import React,{useState} from 'react';

function App() {

const [weight,setWeight]=useState();
const [height,setHeight]=useState();
const [bmi,setBmi]=useState('');
const [message,setMessage]=useState('')

// Logic

let calcbmi = (event) => {

      event.preventDefault()

if(weight===0  || height===0){
  alert="Please enter a valid heighr and weight"

}
else{
  let bmi= (weight/(height*height)*10000)
  setBmi(bmi.toFixed(1))
}
// 


if(bmi<18.5){
 setMessage("You Are Underweight")
}
else if(bmi>18.5 && bmi<25){
  setMessage("You Have An healthy Weight")
}
else{
setMessage("You Are Overweight")
}

}





let reload = () => {
  window.location.reload()
}






  return (
    // <div className="App">
      <div className='container bg-light'>
        <h2>BMI CALCULATOR</h2> <br></br> 
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight (kg) </label>
            <input type="text" placeholder='Enter weight value' onChange={(e) => setWeight(e.target.value)} value={weight} />
          </div>
          <div>
            <label>Height (cm) </label>
            <input type="text" placeholder='Enter Height value' onChange={(event) => setHeight(event.target.value)} value={height} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is :{bmi}</h3>
            <h3>{message}</h3>
            

          </div>
        </form>

      </div>
    // </div>
  );
}

export default App;

