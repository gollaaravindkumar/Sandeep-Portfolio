import React from "react";
import hand from "../../assets/hand.svg";
import send from "../../assets/send.svg";
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Sai Sandeep
        <img
          src={hand}
          alt=""
          style={{ marginLeft: "8px", width: "30px", height: "30px" }}
          className="home__hand"
        />
      </h1>

      <h3 className="home__subtitle">Frontend Developer</h3>
      <p className="home__description">
        I’m a creative designer from India, currently pursuing my BTech. I'm
        deeply passionate about design and committed to producing meaningful
        work
      </p>
      <a href="" className="button button--flex">
        Say Hello
        <img
          src={send}
          alt=""
          style={{
            marginLeft: "8px",
            width: "20px",
            height: "20px",
            filter: "invert(100%)",
          }}
          className="button__icon"
        />
      </a>
    </div>
  );
};

export default Data;
