import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import "./Menu.scss";
import { Link } from "react-router-dom";

export default function Menu({ setOpen, open, page }) {
  const handleChangePage = (id) => {
    setTimeout(() => {
      document.querySelector(`#${id}`).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 250);

    setOpen(false);
  };
  return (
    <div className="menu">
      {open ? (
        <RiCloseFill
          onClick={() => setOpen(false)}
          style={{ color: "#efc641", fontSize: "2rem" }}
        />
      ) : (
        <GiHamburgerMenu
          onClick={() => setOpen(true)}
          style={{ color: "#efc641", fontSize: "2rem" }}
        />
      )}
      <div className={`menuName ${open && "hidden"}`}>{page.toUpperCase()}</div>
      <ul className={`pagelist ${!open && "hidden"}`}>
        <li>
          <Link onClick={() => handleChangePage("home")} to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => handleChangePage("projects")} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={() => handleChangePage("contact")} to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}
