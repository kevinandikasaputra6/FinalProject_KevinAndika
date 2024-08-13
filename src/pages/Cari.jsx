import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { listCars } from "../utils/getCars";
import Assets from "../assets/index";
import { BiFontSize } from "react-icons/bi";

export default function Cari() {
  const [cars, setCars] = useState(null);
  const [inputData, setInputData] = useState({
    typeDriver: "",
    tanggal: "",
    jam: "",
    capacity: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    if (
      inputData.typeDriver === "" ||
      inputData.tanggal === "" ||
      inputData.jam === ""
    ) {
      return alert("Mohon dipilih Tipe Driver, Tanggal dan waktu jemput");
    }

    const data = await listCars((el) => {
      return inputData.capacity
        ? el.capacity >= inputData.capacity
        : true &&
            el.typeDriver === inputData.typeDriver &&
            el.availableAt >= new Date(inputData.tanggal) &&
            el.availableAt.getHours() >= Number(inputData.jam);
    });

    setCars(data);
  };

  return (
    <>
      <Navigation />
      <Hero />
      <section id="search" className="mt-n5">
        <div className="container">
          <div className="card" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <form className="row g-3 justify-content-center" id="form-search">
                <div className="col-auto mx-4">
                  <label className="form-label" style={{ color: "grey" }}>
                    Tipe Driver<span className="text-danger">*</span>
                  </label>
                  <select
                    style={{
                      width: "180px",
                      height: "50px",
                      padding: "10px",
                      border: "2px solid #ccc",
                      borderRadius: "5px",
                      fontSize: "16px",
                      color: "gray",
                    }}
                    className="form-select"
                    id="tipedriver"
                    name="typeDriver"
                    required
                    onChange={(e) => handleChange(e)}
                  >
                    <option style={{ color: "red" }}>Pilih Tipe Driver</option>
                    <option value="Dengan Supir">Dengan Sopir</option>
                    <option value="Lepas Kunci">
                      Tanpa Sopir (Lepas Kunci)
                    </option>
                  </select>
                </div>
                <div className="col-auto mx-4">
                  <label className="form-label" style={{ color: "grey" }}>
                    Tanggal<span className="text-danger">*</span>
                  </label>
                  <input
                    style={{
                      width: "180px",
                      height: "50px",
                      padding: "10px",
                      border: "2px solid #ccc",
                      borderRadius: "5px",
                      color: "gray",
                    }}
                    type="date"
                    id="tanggal"
                    name="tanggal"
                    className="form-control"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-auto mx-4">
                  <label className="form-label" style={{ color: "grey" }}>
                    Waktu Jemput/Ambil<span className="text-danger">*</span>
                  </label>
                  <select
                    style={{
                      width: "180px",
                      height: "50px",
                      padding: "10px",
                      border: "2px solid #ccc",
                      borderRadius: "5px",
                      fontSize: "16px",
                      color: "gray",
                    }}
                    className="form-select"
                    id="jam"
                    name="jam"
                    required
                    onChange={(e) => handleChange(e)}
                  >
                    <option>Pilih Waktu</option>
                    <option value="8">08.00</option>
                    <option value="9">09.00</option>
                    <option value="10">10.00</option>
                    <option value="11">11.00</option>
                    <option value="12">12.00</option>
                  </select>
                </div>
                <div className="col-auto mx-4">
                  <label className="form-label" style={{ color: "grey" }}>
                    Jumlah Penumpang(optional)
                  </label>
                  <div className="input-wrap">
                    <input
                      style={{
                        width: "280px",
                        height: "50px",
                        padding: "10px",
                        border: "2px solid #ccc",
                        borderRadius: "5px",
                      }}
                      type="number"
                      id="penumpang"
                      className="form-control"
                      placeholder="Jumlah Penumpang"
                      name="capacity"
                      onChange={(e) => handleChange(e)}
                    />
                    <img
                      src={Assets.User}
                      alt="User Icon"
                      className="input-icon"
                    />
                  </div>
                </div>
                <div className="col-auto mx-4">
                  <label className="form-label invisible">cari mobil</label>
                  <button
                    style={{ width: "100px", height: "50px" }}
                    type="button"
                    id="cari"
                    className="btn btn-success d-block"
                    onClick={(e) => handleSearch(e)}
                  >
                    Cari Mobil
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="search-result" className="my-5">
        <div className="container">
          <div className="row">
            {cars
              ? cars.map((e, index) => (
                  <div className="col-12 col-md-4 mb-4" key={index}>
                    <div className="card pb-2">
                      <img
                        src={e.image}
                        className="card-img-top img-fluid"
                        alt={e.name}
                      />
                      <div className="card-body">
                        <h1>{e.name}</h1>
                        <label style={{ fontSize: "25px", fontWeight: "600" }}>
                          Rp. {new Intl.NumberFormat("id-ID").format(e.price)}/
                          hari
                        </label>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tempora, accusamus!
                        </p>
                        <ul>
                          <li>
                            <img src={Assets.User} />
                            <span>{e.capacity} Orang</span>
                          </li>
                          <li>
                            <img src={Assets.Setting} />
                            <span>Manual</span>
                          </li>
                          <li>
                            <img src={Assets.Calender} />
                            <span>Tahun 2020</span>
                          </li>
                        </ul>
                        <Link
                          to={"/Detail/" + e.id}
                          className="btn btn-success d-block"
                        >
                          Pilih Mobil
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              : cars !== null && (
                  <p className="text-center">
                    Hasil Tidak Ditemukan, Silahkan Melakukan Pencarian Ulang!
                  </p>
                )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
