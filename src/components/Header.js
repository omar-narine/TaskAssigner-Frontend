import { useLocation } from "react-dom";
import Button from "./Button";
import PropTypes from "prop-types";

// The onAdd and showAdd functions are meant to be used
// in relation to a button that might be added next to the
// header title
const Header = ({ HeaderText, onAdd, showAdd }) => {
  return (
    <div className="Header">
      <h1>{HeaderText}</h1>
    </div>
  );
};

Header.propTypes = {
  HeaderText: PropTypes.string,
};

Header.defaultProps = {
  HeaderText: "Task Management",
};

export default Header;
