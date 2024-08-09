import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Detail() {
  const params = useParams();
  const cachedCars = localStorage.getItem("CARS");
  const parsedCars = JSON.parse(cachedCars);
  const [data] = useState(parsedCars.find((e) => e.id == params.id));
  return (
    <>
      <Navigation />
      <section>
        <div className="container">
          <div className="row flex-md-row-reverse">
            <div className="col-12 col-md-3">
              <img src={data.image} alt={data.name} />
              <h4>{data.name}</h4>
              <span>
                {data.capacity - 2} - {data.capacity} orang
              </span>
              <h5>Total {data.price}</h5>
            </div>
            <div className="col-12 col-md-9">
              <h4>Tentang Paket</h4>
              <h5>Include</h5>
              <h5>Exclude</h5>
              <h5>Refund, Reschedule, Overtime</h5>
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </>
  );
}
