import React from "react";
import "./style.scss";

const FormInstructions = ({action}) => {
  const termsAndConditionsHandler = () => {
    alert(
      "Terms and Contions Apply:\nYour sign up credentials will be saved after your first sign up.\nRisk free, your data protection will be applied.\nThanks for reading our terms and conditions!!!"
    );
  };

  const forgotPasswordHandler = () => {
    alert(
      "You can again sign up with the same email with new password, no need to recover old password. Thanks!!!"
    );
  };

  return (
    <div className="instruction">
      {action === "Sign Up" ? (
        <p>
          You have read our{" "}
          <i className="alert" onClick={termsAndConditionsHandler}>
            Terms and Conditions!!!
          </i>
        </p>
      ) : (
        <p>
          <i className="alert" onClick={forgotPasswordHandler}>
            Forgot Password!!!
          </i>
        </p>
      )}
    </div>
  );
};

export default FormInstructions;
