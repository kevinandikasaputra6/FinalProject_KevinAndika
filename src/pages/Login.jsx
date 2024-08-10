import React from "react";
import "/src/Login.css";
import { FaUser, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Assets from "../assets/index";

export default function Login() {
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <img src={Assets.Mobil} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <div className="wrapper">
              <form action="">
                <h1>Masuk</h1>
                <div className="input-box">
                  <label>Email</label>
                  <input type="text" placeholder="Username" />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <label>Password</label>
                  <input type="password" placeholder="Password" />
                  <FaEye className="icon" />
                </div>
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <Link
                    style={{
                      marginLeft: "5px",
                      textDecoration: "none",
                      color: "green",
                    }}
                  >
                    Forgot Password
                  </Link>
                </div>
                <Link
                  style={{
                    width: "100%",
                    height: "50%",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    borderRadius: "40px",
                    fontSize: "16px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                    color: "white",
                    fontWeight: "700",
                  }}
                  to={"/"}
                  className="btn btn-success d-block"
                >
                  Masuk
                </Link>
                <div className="register-link">
                  <p>
                    Belum punya akun?
                    <Link
                      to={"/register"}
                      style={{
                        marginLeft: "5px",
                        textDecoration: "none",
                        color: "green",
                      }}
                    >
                      Daftar di sini
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
