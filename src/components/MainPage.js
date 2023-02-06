import Header from "./Header";
import Button from "./Button";
import { useHistory, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const adminOnClick = () => {
    navigate("/admin");
    console.log("Admin Clicked");
  };

  const studentOnClick = () => {
    navigate("/student");
    console.log("Student Clicked");
  };

  return (
    <div className="MainPage">
      <Header HeaderText={"Task Assignment Tool"} />
      <h2>Welcome to the Company Task Assignment Tool</h2>
      <p>
        This tool serves as the main point for the assignment of and
        organization of all company tasks
      </p>
      <h3>Pleas Select the Appropriate Option</h3>
      <Button className="Button" text={"Student"} onClick={studentOnClick} />
      <Button className="Button" text={"Admin"} onClick={adminOnClick} />
    </div>
  );
};

export default MainPage;
