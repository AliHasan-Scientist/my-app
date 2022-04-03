import React ,{useState}  from "react";
export default function Formtext(props) {
    // Custom Method - Events
const Formate= ()=>{
    window.confirm("Really| You want to do this('.') ?")
}

const [text, setText] = useState('Hello ');


  return (
    <div>
<div className="mb-3">
        <label htmlFor="my-text" class="form-label">
      <h1>  {props.heading} -{text} </h1>
        </label>
        <textarea
          className="form-control"
          id="my-text"
          rows="8"
          value={text}
         
        ></textarea>
      </div>
      <button type="button" onClick={Formate} className="btn btn-primary">
        Formate
      </button>
    </div>
  );
}
