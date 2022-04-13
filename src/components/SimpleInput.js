import {useRef, useState} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
    const nameRef = useRef();
    const nameInputChangeHandler = e => {
      setEnteredName(e.target.value);
    }
    
    const formSubmissionHandler = e =>{
      e.preventDefault();
      
      if(enteredName.trim() === ''){
          return
      }
    }
    
    return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' onChange={nameInputChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
