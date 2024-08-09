import React from "react";
import Form from "react-bootstrap/Form";
import Assets from "../assets/index";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <img src={Assets.Mobil} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <h2>Daftar</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nama" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukkan Password" />
              </Form.Group>
            </Form>
            <button className="btn btn-success" style={{ width: "100%" }}>
              Daftar
            </button>
            <p className="mt-4">
              Sudah punya akun?
              <Link
                style={{
                  marginLeft: "5px",
                  textDecoration: "none",
                  color: "green",
                }}
              >
                Masuk di ini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
