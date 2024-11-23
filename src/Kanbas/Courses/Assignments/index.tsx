import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { PiNotebookFill } from "react-icons/pi";
import { Link, useLocation, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { courses } from "../../Database";
import AssignmentEditor from "./Editor";
import * as assignmentClient from "../client"
import { useEffect } from "react";
import { fetchAllAssignments, fetchAssignmentsForCourse } from "./client";

export default function Assignments({
  assignmentName,
  setAssignmentName,
  addAssignment,
}: {
  assignmentName: string;
  setAssignmentName: (title: string) => void;
  addAssignment: () => void;
}) {
  const { courseId } = useParams<{ courseId: string }>();
  useEffect(() => {
    if (courseId) {
      fetchAssignmentsForCourse(courseId);
    }
  }, []);
  return (
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="float-right">
        <input
          type="text"
          className="block border border-gray-300"
          placeholder="🔍 Search..."
        />

        <Link
          to={`/Kanbas/Courses/Course/Assignments/Editor`}
          className="btn btn-lg btn-danger me-1 float-end"
        >
          + Assignment
        </Link>
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
        {assignments.map((assignment) => (
          <li className="wd-lesson list-group-item" key={assignment._id}>
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <PiNotebookFill className="me-2 fs-3 text-success" />
              <Link
                to={`/Kanbas/Courses/${assignment.course}/Assignments/editor`}
              >
                <strong>{`${assignment._id} - ${assignment.title}`}</strong>
              </Link>
              <LessonControlButtons />
              <p></p>
            </div>
            <li />
          </li>
        ))}
      </ul>
    </li>
  );
}
