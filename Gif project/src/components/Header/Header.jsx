import React from "react";
import "./Header.css";
import Image from "../../assets/Logo/logo.png";
import { MdExpandMore } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";

const Header = () => {
  return (
    <div className="header">
      <img className="logo_img" src={Image} />
      <div className="menu">
        <button className="menu_button">
          <div className="menu_decoration hover-menu">
            <h2>Reactions</h2>
          </div>
        </button>
        <button className="menu_button">
          <div className="menu_decoration hover-menu">
            <h2>Entertainment</h2>
          </div>
        </button>
        <button className="menu_button">
          <div className="menu_decoration hover-menu">
            <h2>Sports</h2>
          </div>
        </button>
        <button className="menu_button">
          <div className="menu_decoration hover-menu">
            <h2>Stickers</h2>
          </div>
        </button>
        <button className="menu_button">
          <div className="menu_decoration hover-menu">
            <h2>Artists</h2>
          </div>
        </button>
        <button className="menu_button">
          <div className="menu_decoration hover-menu">
            {/*  <MoreHorizIcon /> */}
            <MdMoreHoriz />
          </div>
        </button>
      </div>
      <button className="button_header hover-menu">
        <h2>Upload</h2>
      </button>
      <button className="button_header hover-menu">
        <h2>Create</h2>
      </button>
      <div className="user_header">
        <img
          className="profile_img"
          src="https://media.giphy.com/avatars/default3/80h.gif"
        ></img>
        <p>Jackson</p>

        <MdExpandMore />
      </div>
    </div>
  );
};

export default Header;
