import React, { useEffect, useState } from "react";
import client1 from "../../assets/img/partner/client-1.png";
import client2 from "../../assets/img/partner/client-2.png";
import client3 from "../../assets/img/partner/client-3.png";
import client4 from "../../assets/img/partner/client-4.png";
import client5 from "../../assets/img/partner/client-5.png";
import client6 from "../../assets/img/partner/client-6.png";
import client7 from "../../assets/img/partner/client-7.png";
import client8 from "../../assets/img/partner/client-8.png";

export default function Partners() {
  const [index, setIndex] = useState(0);

  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [clients.length]);

  const getVisibleClients = (startIndex) => {
    let visibleClients = [];
    for (let i = 0; i < 4; i++) {
      visibleClients.push(clients[(startIndex + i) % clients.length]);
    }
    return visibleClients;
  };

  return (
    <div
      className="container mt-5"
      style={{
        background: "green",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              {getVisibleClients(index).map((client, idx) => (
                <div className="col-3" key={idx}>
                  <img
                    src={client}
                    className="d-block w-100"
                    alt={`Client ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
