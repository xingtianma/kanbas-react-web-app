import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        defaultValue="alice"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        defaultValue="123"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        defaultValue="Alice"
        placeholder="username"
        className="form-control mb-2"
        id="wd-firstname"
      />
      <input
        defaultValue="Wonderland"
        placeholder="username"
        className="form-control mb-2"
        id="wd-lastname"
      />
      <input
        defaultValue="2000-01-01"
        type="date"
        placeholder="username"
        className="form-control mb-2"
        id="wd-dob"
      />
      <input
        defaultValue="alice@wonderland"
        type="email"
        className="form-control mb-2"
        id="wd-email"
      />
      <select defaultValue="FACULTY" className="form-select mb-2" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signout-btn"
            to="/Kanbas/Account/Signin"
            className="btn btn-primary bg-danger w-100">
            Signout </Link>
    </div>
  );
}

/*
<input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
      <input defaultValue="123"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
      <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kanbas/Account/Signin" >Sign out</Link>
      */
