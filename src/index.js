import { useState } from "react";
import ReactDOM from 'react-dom';

//This fuction uses state
function MyForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    ReactDOM.render(<Message msg={name}/>, document.getElementById('root1'));
  }

  return (
    <form onChange={handleChange}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}


//This function uses Props
function Message(props){
    return <div><h3>Keyboard Changes</h3><h5>{props.msg}</h5></div>;
}

ReactDOM.render(<MyForm />, document.getElementById('root'));