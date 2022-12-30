import { useState } from "react";
import img from "../assets/logo2.png";
import "./Contact.scss";

export default function Contact() {
  const INITIAL = {
    name: "",
    email: "",
    text: "",
    phone: "",
    show: false,
  };
  const [data, setData] = useState(INITIAL);
  const handleChange = (e) => {
    setData((prev) => (prev = { ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://82.165.121.189:4000/message", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => handleShowNotification());
  };
  const handleShowNotification = () => {
    setData((prev) => (prev = { ...prev, show: true }));
    setTimeout(() => {
      setData(INITIAL);
    }, 2000);
  };
  return (
    <div className="contactsCont">
      <div className="imgBlock">
        <img src={img} alt="logo" />
      </div>
      <div className="title">
        <h2>Contact Me</h2>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} className="formBlock">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={data.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="e-mail"
            value={data.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="text"
            cols="30"
            rows="10"
            placeholder="text your message to me..."
            value={data.text}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="tel"
            name="phone"
            placeholder="phone"
            value={data.phone}
            onChange={handleChange}
            required
          />
          {data.show && (
            <h3>{`${data.name}, your message was successfully sent! `}</h3>
          )}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
