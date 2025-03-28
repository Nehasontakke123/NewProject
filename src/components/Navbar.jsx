


import React, { useState } from "react";
import "../assets/css/Navbar.css";
import { FaSearch, FaShoppingCart, FaUser, FaGem, FaRing, FaGift, FaBars, FaTimes } from "react-icons/fa";
import { IoIosMicrophone } from "react-icons/io";
import { BsCollection, BsDiamond } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GiNecklace, GiEarrings } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* ✅ 1st Row: Logo + Search Bar + User Icons */}
      <div className="nav-top">
        <div className="nav-logo">Jewellery</div>
        <div className="nav-search">
          <input type="text" placeholder="Search for Jewellery, Gold, Diamond..." />
          <FaSearch className="search-icon" />
          <IoIosMicrophone className="mic-icon" />
        </div>
        <div className="nav-icons">
          <FaGem />
          <BsCollection />
          <AiOutlineHeart />
          <FaUser />
          <FaShoppingCart className="cart-icon" />
          {/* Mobile Toggle Button */}
          <button className="nav-toggle md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ✅ 2nd Row: Navigation Links */}
      <div className={`nav-links ${isOpen ? "flex" : "hidden"} flex-col absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex md:flex-row md:bg-transparent md:shadow-none`}>
        <span><GiNecklace /> All Jewellery</span>
        <span><FaGem /> Gold</span>
        <span><BsDiamond /> Diamond</span>
        <span><GiEarrings /> Earrings</span>
        <span><FaRing /> Rings</span>
        <span><FaGem /> Daily Wear</span>
        <span><BsCollection /> Collections</span>
        <span><FaGem /> Wedding</span>
        <span><FaGift /> Gifting</span>
        <span><FaGem /> More</span>
      </div>
    </nav>
  );
};

export default Navbar;
