import './Form.scss';
import FormOptions from './components/formOptions';
import FormHeading from './components/formHeading';
import FormInputs from './components/formInputs';
import { useState } from 'react';


function Form() {
  const [action, setAction] = useState("Sign Up")


  return (
    <div className="App">
      <FormOptions action={action} setAction={setAction}/>

      <FormHeading action={action}/>

      <FormInputs action={action}/>

    </div>
  );
}

export default Form;
