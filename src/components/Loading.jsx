import "./Loading.scss";
import BarLoader from "react-spinners/BarLoader";
import logo from "./assets/logo2.png";

export default function Loading() {
  return (
    <div className="loading">
      <img src={logo} alt="logo" />
      <BarLoader color="white" height={2} speedMultiplier={1} width={400} />
      <p>loading...</p>
    </div>
  );
}
