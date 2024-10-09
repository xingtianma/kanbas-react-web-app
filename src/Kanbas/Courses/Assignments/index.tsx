import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { PiNotebookFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="float-right">
        <input
          type="text"
          className="block border border-gray-300"
          placeholder="🔍 Search..."
        />
        <button className="btn btn-lg btn-danger me-1 float-end">
          + Assignment
        </button>
        <button className="btn btn-lg btn-secondary me-1 float-end">
          + Group
        </button>
      </div>
      <br />
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        ASSIGNMENTS
      </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
          <div>
            <BsGripVertical className="me-2 fs-3" />
            <PiNotebookFill className="me-2 fs-3 text-success" />
            <Link to="/Kanbas/Courses/1234/Assignments/editor">
              <strong>A1 - ENV + HTML</strong>
            </Link>
            <LessonControlButtons />
            <p>
              <span className="text-danger">Multiple Modules</span> |{" "}
              <strong>Not available until</strong> May 6 at 12:00AM |{" "}
              <strong>Due</strong> May 13 at 11:59PM | 100 pts
            </p>
          </div>
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3 " />
          <PiNotebookFill className="me-2 fs-3 text-success" />
          <Link to="/Kanbas/Courses/1234/Assignments/editor">
            <strong>A2 - CSS + BOOTSTRAP</strong>
          </Link>
          <LessonControlButtons />
          <p>
            <span className="text-danger">Multiple Modules</span> |{" "}
            <strong>Not available until</strong> May 13 at 12:00AM |{" "}
            <strong>Due</strong> May 20 at 11:59PM | 100 pts
          </p>
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <PiNotebookFill className="me-2 fs-3 text-success" />
          <Link to="/Kanbas/Courses/1234/Assignments/editor">
            <strong>A3 - JAVASCRIPT + REACT</strong>
          </Link>
          <LessonControlButtons />
          <p>
            <span className="text-danger">Multiple Modules</span> |{" "}
            <strong>Not available until</strong> May 20 at 12:00AM |{" "}
            <strong>Due</strong> May 27 at 11:59PM | 100 pts
          </p>
        </li>
      </ul>
    </li>

    /*
    <div id="wd-assignments">
      <input id="wd-search-assignment"
             placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a>
          <p>Multiple Modules | <strong>Not available until</strong> May 6 at 12:00AM | <strong>Due</strong> May 13 at 11:59PM | 100 pts</p>
        </li>
        <li className="wd-assignment-list-item">
        <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A2 - CSS + BOOTSTRAP
          </a>
          <p>Multiple Modules | <strong>Not available until</strong> May 13 at 12:00AM | <strong>Due</strong> May 20 at 11:59PM | 100 pts</p>
        </li>
        <li className="wd-assignment-list-item">
        <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A3 - JAVASCRIPT + REACT
          </a>
          <p>Multiple Modules | <strong>Not available until</strong> May 20 at 12:00AM | <strong>Due</strong> May 27 at 11:59PM | 100 pts</p>
        </li>
      </ul>
    </div>
    */
  );
}
