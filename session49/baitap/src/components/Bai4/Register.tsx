import React from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <form style={{ marginTop: "200px", marginLeft: "650px" }} action="">
        <h3>Login account</h3>
        <label htmlFor="">Your email</label>
        <br />
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" />
        <br />
        <br />
        <label htmlFor="">Confirm password</label>
        <br />
        <input type="password" />
        <br />
        <br />
        <button>Create an account</button>
        <br />
        <br />
        <p>
          Already have an account ?{" "}
          <b>
            <NavLink to="/login">Login here</NavLink>
          </b>
        </p>
      </form>
    </div>
  );
}
