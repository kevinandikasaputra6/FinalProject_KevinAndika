import Assets from "../assets/index";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import { Accordion } from "react-bootstrap";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero isButtonShow={true} />
      <section id="our-services">
        <div className="container py-5 my-5">
          {/* <!-- container digunakan di setiap section agar tampilan rapi dan konsisten -->

            <!-- grid bootstrap menggunakan flex jadi kita bisa mengatur aligment mengunakan align-items dan justify-content --> */}
          <div className="row align-items-center">
            {/* <!-- perilaku col di bawah sama dengan yang di terapkan di hero -->
                <!-- mb adalah className utilitas bootstrap untuk menambahkan margin bottom -->
                <!-- sama dengan col karena kita hanya membutuhkan margin di ukuran layar terkecil sampai 767px -->
                <!-- maka di ukuran layar 768px ke atas kita hapus marginnya dengan menggunakan mb-md-0 --> */}
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <img
                src={Assets.service}
                className="img-fluid"
                alt="TMMIN Car Rental Services"
              />
            </div>
            <div className="col-12 col-md-6">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul>
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us">
        <div className="container py-5 my-5">
          {/* <!-- container digunakan di setiap section agar tampilan rapi dan konsisten --> */}
          <h2 className="mb-3">Why Us?</h2>
          <p className="mb-4">Mengapa harus pilih Binar Car Rental?</p>
          {/* <!-- cara cepat membuat row col -> ketik : div.row>div.col*4 , kemudian ctrl + space  --> */}
          <div className="row">
            {/* <!-- perilaku col di bawah sama dengan yang di terapkan di hero -->
                <!-- tetapi yang berbeda disini kita menggunakan 3 ukuran berbeda  -->
                 
                <!-- col-lg-3 (dibagi menjadi 4 kolom (12/4)) akan di terapkan di ukuran layar mulai 992px keatas --> */}
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={Assets.Complete}
                    className="mb-4"
                    alt="TMMIN Car Rental - Mobil Lengkap"
                  />
                  <h3 className="mb-4">Mobil Lengkap</h3>
                  <p>
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={Assets.Price}
                    className="mb-4"
                    alt="TMMIN Car Rental - Harga Murah"
                  />
                  <h3 className="mb-4">Harga Murah</h3>
                  <p>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={Assets.Hours}
                    className="mb-4"
                    alt="TMMIN Car Rental - Layanan 24 Jam"
                  />
                  <h3 className="mb-4">Layanan 24 Jam</h3>
                  <p>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    src={Assets.Profesional}
                    className="mb-4"
                    alt="TMMIN Car Rental - Sopir Profesional"
                  />
                  <h3 className="mb-4">Sopir Profesional</h3>
                  <p>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <section id="sewa-mobil">
        <div className="container p-5 my-5 d-flex justify-content-center bg-red text-light rounded-4">
          <div className="text-center p-4">
            <h2 className="mb-4 col-12">Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p className="mb-5 col-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              cumque, quod atque ipsum accusantium alias odit temporibus? Id
              minus adipisci, nihil accusamus consectetur magnam excepturi fugit
              consequatur ea. Quos, saepe?
            </p>
            <a href="#" className="btn btn-success">
              Mulai Sewa Mobil
            </a>
          </div>
        </div>
      </section>
      <section id="faq">
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-12 col-md-5">
              <h2>Frequently Asked Question</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-12 col-md-6">
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Apa saja syarat yang dibutuhkan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Berapa hari minimal sewa mobil lepas kunci?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Apakah Ada biaya antar-jemput?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Bagaimana jika terjadi kecelakaan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
