import Header from "./Header";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StudentPage = () => {
  // Back Button Routing Information
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate("/");
  };

  return (
    <div className="StudentPage">
      {/* Header for the Student Page */}
      <Header HeaderText={"Student Portal"} />
      <Button className={"BackButton"} text={"Back"} onClick={onBackClick} />
    </div>
  );
};

export default StudentPage;
