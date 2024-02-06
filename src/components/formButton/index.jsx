import React from "react";
import "./style.scss";

const FormButton = ({action}) => {
  return (
    <div className="buttons">
      {action === "Sign Up" ? <button>Sign Up</button> : <button>Login</button>}
    </div>
  );
};

export default FormButton;
