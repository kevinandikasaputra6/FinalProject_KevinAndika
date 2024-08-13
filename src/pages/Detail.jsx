import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Assets from "../assets/index";
import "/src/Login.css";

export default function Detail() {
  const params = useParams();
  const cachedCars = localStorage.getItem("CARS");
  const parsedCars = JSON.parse(cachedCars);
  const [data] = useState(parsedCars.find((e) => e.id == params.id));
  return (
    <>
      <Navigation />
      <section id="search" className="mt-n5">
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="card">
            <div className="card-body">
              <h4 className="mb-5" style={{ fontWeight: "bold" }}>
                Pencarianmu
              </h4>
              <form className="row g-3 justify-content-center" id="form-search">
                <div className="col-auto">
                  <label style={{ color: "grey" }} className="form-label">
                    Nama Mobil
                  </label>
                  <input
                    value={data.name}
                    type="text"
                    className="form-control"
                    name="capacity"
                    disabled
                  />
                </div>
                <div className="col-auto">
                  <label style={{ color: "grey" }} className="form-label">
                    Category
                  </label>
                  <div className="input-wrap">
                    <input
                      value={data.category}
                      type="text"
                      className="form-control"
                      name="capacity"
                      disabled
                    />
                    <img
                      src={Assets.Date}
                      alt="User Icon"
                      className="input-icon"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <label style={{ color: "grey" }} className="form-label">
                    Harga Sewa perhari
                  </label>
                  <div className="input-wrap">
                    <input
                      value={`Rp. ${new Intl.NumberFormat().format(
                        data.price
                      )}`}
                      type="text"
                      className="form-control"
                      name="capacity"
                      disabled
                    />
                    <img
                      src={Assets.Clock}
                      alt="User Icon"
                      className="input-icon"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <label style={{ color: "grey" }} className="form-label">
                    Status
                  </label>
                  <div className="input-wrap">
                    <input
                      value={data.status}
                      type="text"
                      className="form-control"
                      name="capacity"
                      disabled
                    />
                    <img
                      src={Assets.User}
                      alt="User Icon"
                      className="input-icon"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row flex-md-row-reverse">
            <div className="col-12 col-md-6 mb-4">
              <div
                className="card mt-3 my-30 p-3"
                style={{ width: "505px", height: "auto" }}
              >
                <img src={data.image} alt={data.name} />
                <h3 className="mt-4">{data.name}</h3>
                <span className="mb-5">
                  <img src={Assets.User} />
                  <span>
                    {" "}
                    {data.capacity - 2} - {data.capacity} orang
                  </span>
                </span>
                <h5 style={{ fontSize: "15px", fontWeight: "600" }}>
                  Total Rp. {new Intl.NumberFormat().format(data.price)}
                </h5>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card mt-3 p-3">
                <h3 className="mb-4">Tentang Paket</h3>
                <h5 style={{ fontSize: "15px", fontWeight: "600" }}>Include</h5>
                <ul className="mb-4">
                  <li className="mb-2">
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li className="mb-2">Sudah termasuk bensin selama 12 jam</li>
                  <li className="mb-2">Sudah termasuk Tiket Wisata</li>
                  <li className="mb-2">Sudah termasuk pajak</li>
                </ul>
                <h5 style={{ fontSize: "15px", fontWeight: "600" }}>Exclude</h5>
                <ul className="mb-4">
                  <li className="mb-2">
                    Tidak termasuk biaya makan sopir Rp 75.000/hari
                  </li>
                  <li className="mb-2">
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li className="mb-2">Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h5 style={{ fontSize: "15px", fontWeight: "600" }}>
                  Refund, Reschedule, Overtime
                </h5>
                <ul className="mb-4">
                  <li className="mb-2">
                    Tidak termasuk biaya makan sopir Rp 75.000/hari
                  </li>
                  <li className="mb-2">
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li className="mb-2">Tidak termasuk akomodasi penginapan</li>
                  <li className="mb-2">
                    Tidak termasuk biaya makan sopir Rp 75.000/hari
                  </li>
                  <li className="mb-2">
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li className="mb-2">Tidak termasuk akomodasi penginapan</li>
                  <li className="mb-2">
                    Tidak termasuk biaya makan sopir Rp 75.000/hari
                  </li>
                  <li className="mb-2">
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li className="mb-2">Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
