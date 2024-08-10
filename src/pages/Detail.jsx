import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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
              <form className="row g-3 justify-content-center" id="form-search">
                <div className="col-auto">
                  <label className="form-label">Nama Mobil</label>
                  <input type="text" className="form-control" name="capacity" />
                </div>
                <div className="col-auto">
                  <label className="form-label">Category</label>
                  <input type="text" className="form-control" name="capacity" />
                </div>
                <div className="col-auto">
                  <label className="form-label">Harga Sewa perhari</label>
                  <input type="text" className="form-control" name="capacity" />
                </div>
                <div className="col-auto">
                  <label className="form-label">Status</label>
                  <input type="text" className="form-control" name="capacity" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row flex-md-row-reverse">
            <div className="col-12 col-md-6">
              <div
                className="card mt-3 my-30 p-3"
                style={{ width: "405px", height: "500px" }}
              >
                <img src={data.image} alt={data.name} />
                <h4>{data.name}</h4>
                <span>
                  {data.capacity - 2} - {data.capacity} orang
                </span>
                <h5>Total {data.price}</h5>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div
                className="card mt-3 p-3"
                style={{ width: "605px", height: "718px" }}
              >
                <h4>Tentang Paket</h4>
                <h5>Include</h5>
                <p>
                  - Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </p>
                <p>- Sudah termasuk bensin selama 12 jam</p>
                <p>- Sudah termasuk Tiket Wisata</p>
                <p>- Sudah termasuk pajak</p>
                <h5>Exclude</h5>
                <p>- Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
                <p>
                  - Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </p>
                <p>- Tidak termasuk akomodasi penginapan</p>
                <h5>Refund, Reschedule, Overtime</h5>
                <p>- Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
                <p>
                  - Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </p>
                <p>- Tidak termasuk akomodasi penginapan</p>
                <p>- Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
                <p>
                  - Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </p>
                <p>- Tidak termasuk akomodasi penginapan</p>
                <p>- Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
                <p>
                  - Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </p>
                <p>- Tidak termasuk akomodasi penginapan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
