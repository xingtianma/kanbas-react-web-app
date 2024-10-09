import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: "120px", left: 0 }}
      className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wcd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account{" "}
      </Link>

      <NavLink
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white"
            : "list-group-item text-center border-0 bg-black"
        }
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard{" "}
      </NavLink>
      <NavLink
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white"
            : "list-group-item text-center border-0 bg-black"
        }
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses{" "}
      </NavLink>
      <NavLink
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white"
            : "list-group-item text-center border-0 bg-black"
        }
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar{" "}
      </NavLink>
      <NavLink
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white"
            : "list-group-item text-center border-0 bg-black"
        }
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox{" "}
      </NavLink>
      <NavLink
        to="/Labs"
        id="labs-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white"
            : "list-group-item text-center border-0 bg-black"
        }
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs{" "}
      </NavLink>
    </div>
  );
}
