import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      {" "}
      <nav>
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
