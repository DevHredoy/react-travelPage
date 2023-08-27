import React from "react";
import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      {/* <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div> */}

      <div className="section-center featured-center">
        {/*.................*/}

        {tours.map((tour) => {
          const { id, imag, title, text, icon, duration, price,date , location } = tour;

          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={imag} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map">{icon}</i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}

        {/*.................*/}

        



       
      </div>
    </section>
  );
};

export default Tours;
