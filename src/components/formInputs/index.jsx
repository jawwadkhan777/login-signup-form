import React from "react";
import "./style.scss";
import { FaUser, FaEnvelope, FaKey } from "react-icons/fa";
import FormInstructions from "../formInstructions";
import FormButton from "../formButton";



const FormInputs = ({ action }) => {
  const formRefreshHandler = () => {
    action === "Sign Up"
      ? alert("You have successfully signed up, thanks!!!")
      : alert("You have successfully logged in, thanks!!!");
  };

  return (
    <form id="form" className="input" onSubmit={formRefreshHandler}>
      <div className="input_fields">
        {action === "Sign Up" ? (
          <div className="input_fields_input1">
            <FaUser
              size={30}
              style={{ margin: "0px 20px", color: "#bcc6cc" }}
            />
            <input required type="name" placeholder="Enter Name" />
          </div>
        ) : (
          <div></div>
        )}

        <div className="input_fields_input2">
          <FaEnvelope
            size={30}
            style={{ margin: "0px 20px", color: "#bcc6cc" }}
          />
          <input required type="email" placeholder="Enter Email" />
        </div>
        <div className="input_fields_input3">
          <FaKey size={30} style={{ margin: "0px 20px", color: "#bcc6cc" }} />
          <input required type="password" placeholder="Enter Password" />
        </div>
      </div>

      {/* below component shows the instruction in between form inputs and sign up/ login button */}
      <FormInstructions action={action}/>

      {/* below component shows a form submit button (sign up/ login)  */}
      <FormButton action={action}/>
    </form>
  );
};

export default FormInputs;
