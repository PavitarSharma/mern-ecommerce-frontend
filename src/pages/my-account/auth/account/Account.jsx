import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Account.css";
const Account = () => {
  const user = false;
  return (
    <>
      <section>
        <div>
          <p className="account-desc-title">
            Hello <span>pavitarsharma144</span> (not{" "}
            <span>pavitarsharma144</span> ? <Link>Log out</Link> )
          </p>
          <p className="account-description">
            From your account dashboard you can view your{" "}
            <Link to="/orders">recent orders</Link>, manage your{" "}
            <Link to="/">shipping and billing addresses</Link>, and{" "}
            <Link>edit your password and account details</Link>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Account;
