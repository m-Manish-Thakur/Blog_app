import React, { useState, useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
const Navbar = () => {
  const { user, setUser, token, setToken } = useContext(UserContext);

  // console.log(user);

  return (
    <>
      <div>
        <nav id="navbar">
          <Link to="/">
            <img src="Images/logo2.png" />
          </Link>

          <div className="navLinks">
            <Link to="/">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </Link>
            <Link to="/blogs">
              <a class="nav-link" href="#">
                Explore Blogs
              </a>
            </Link>
            <Link to="/blogs">
              <a class="nav-link" href="#">
                About Us
              </a>
            </Link>

            {user ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link to="blogs/addBlog">
                  <a class="nav-link" href="#">
                    <i
                      class="fa-regular fa-pen-to-square"
                      style={{
                        paddingRight: "10px",
                        fontSize: "17px",
                        color: "royalblue",
                      }}
                    ></i>
                    Write
                  </a>
                </Link>
                <Link to="/user/profile">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    style={{ height: "35px" }}
                  />
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/user/login">
                  <a href="#" className="mx-4">
                    Login
                  </a>
                </Link>
                <Link to="/user/register">
                  <button type="button" class="btn btn-success">
                    Get Started
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* #####################  RESPONSIVE   ############################### */}

          <i
            className="fa-solid fa-bars"
            id="buttonToggle"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          ></i>

          <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div class="offcanvas-header justify-content-end">
              <i
                class="fa-solid fa-xmark"
                style={{ float: "right", fontSize: "30px" }}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></i>
            </div>

            <div class="offcanvas-body" id="offcanvasBody">
              <Link to="/">
                <a class="nav-link active" aria-current="page" href="#">
                  <span data-bs-dismiss="offcanvas" aria-label="Close">
                    Home
                  </span>
                </a>
              </Link>
              <Link to="/blogs">
                <a class="nav-link" href="#">
                  <span data-bs-dismiss="offcanvas" aria-label="Close">
                    Explore Blogs
                  </span>
                </a>
              </Link>
              <Link to="/blogs">
                <a class="nav-link" href="#">
                  <span data-bs-dismiss="offcanvas" aria-label="Close">
                    About
                  </span>
                </a>
              </Link>

              {user ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                  }}
                >
                  <Link to="blogs/addBlog">
                    <a class="nav-link" href="#">
                      <i
                        class="fa-regular fa-pen-to-square"
                        style={{
                          paddingRight: "10px",
                          fontSize: "17px",
                          color: "royalblue",
                        }}
                      ></i>
                      <span data-bs-dismiss="offcanvas" aria-label="Close">
                        Write
                      </span>
                    </a>
                  </Link>
                  <Link to="/user/profile">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                      style={{ height: "35px", marginRight: "5px" }}
                    />
                    <span data-bs-dismiss="offcanvas" aria-label="Close">
                      {" "}
                      Account
                    </span>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to="/user/login">
                    <a
                      href="#"
                      className="mx-4"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      Login
                    </a>
                  </Link>
                  <Link to="/user/register">
                    <button
                      type="button"
                      class="btn btn-success mt-4"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
