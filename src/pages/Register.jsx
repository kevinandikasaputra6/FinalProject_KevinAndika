import React from "react";
import Assets from "../assets/index";
import { Link } from "react-router-dom";
import "/src/Login.css";
import { FaUser, FaEye } from "react-icons/fa6";

export default function Register() {
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-end">
            <img src={Assets.Mobil} className="img-fluid" alt="" />
            <h2
              style={{ color: "white" }}
              className="position-absolute mt-auto p-5"
            >
              TMMIN CAR RENTAL
            </h2>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="wrapper">
              <form action="" className="align-content-center">
                <h1>Daftar</h1>
                <div className="input-box">
                  <label>Nama</label>
                  <input type="text" placeholder="Nama lengkap" required />
                </div>
                <div className="input-box">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Contoh: Kevin@gmail.com"
                    required
                  />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Masukkan Password"
                    required
                  />
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
                    height: "100%",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    borderRadius: "10px",
                    fontSize: "16px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                    color: "white",
                    fontWeight: "700",
                  }}
                  to={"/login"}
                  className="btn btn-success d-block"
                  type="button"
                >
                  Daftar
                </Link>
                <div className="register-link">
                  <p>
                    Sudah punya akun?
                    <Link
                      to={"/login"}
                      style={{
                        marginLeft: "5px",
                        textDecoration: "none",
                        color: "green",
                      }}
                    >
                      Masuk
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
