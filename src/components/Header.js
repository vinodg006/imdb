import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import { TOGGLE_DARK_MODE } from "../constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate()

  const { darkMode } = useSelector((state) => state.theme);

  return (
    <Menu inverted={darkMode}>
      <Menu.Item onClick={() => navigate('/')}>Cinema</Menu.Item>
      <Menu.Item title="Dark/Light Mode">
        <Icon
          name={darkMode ? "sun" : "moon"}
          onClick={() => dispatch({ type: TOGGLE_DARK_MODE })}
        />
      </Menu.Item>
    </Menu>
  );
};

export default Header;
