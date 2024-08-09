import { Link } from "react-router-dom";
import Assets from "../assets/index";
function ButtonShow({ isShow }) {
  if (isShow) {
    return (
      <Link to="/Cari" className="btn btn-success">
        Mulai Sewa Mobil
      </Link>
    );
  }
  return "";
}

export default function Hero({ isButtonShow }) {
  return (
    <section id="hero" className="bg-red">
      {/* <!-- container digunakan untuk membatasi lebar content dengan ukuran paling besar adalah 1400px dan konten akan tetap ditengah layar --> */}
      <div className="container">
        {/* <!-- row (baris) digunakan untuk menerapkan sistem grid bootstrap --> */}
        <div className="row">
          {/* <!-- col digunakan untuk membuat kolom -->
                <!-- col-12 (ukuran full) akan diterapkan di ukuran layar terkecil 
                  sampai di breakpoint md atau ukuran layar ≥768px karena kita tambahkan col-md-6 -->
                <!-- jadi konten akan berukuran full di ukuran layar terkecil sampai layar 767px -->
                <!-- layar 768px keatas konten akan dibagi menjadi 2 --> */}
          <div className="col-12 col-md-6 d-flex align-items-center text-light">
            <div>
              <h1 className="mb-4">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p className="mb-4">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <ButtonShow isShow={isButtonShow} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src={Assets.zenix} className="img-fluid" alt="Innova Zenix" />
          </div>
        </div>
      </div>
    </section>
  );
}
