import assignments from "../../Database/assignments.json";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addAssignment } from "./reducer";
import { useDispatch } from "react-redux";

export default function AssignmentEditor({
  dialogTitle,
  assignmentName,
  setAssignmentName,
  addAssignment,
}: {
  dialogTitle: string;
  assignmentName: string;
  setAssignmentName: (name: string) => void;
  addAssignment: () => void;
}) {
  const { cid } = useParams();
  const dispatch = useDispatch();
  console.log("Assignment ID from URL:", cid);
  const assignment = assignments.find(
    (assignment) => assignment.course === cid
  );
  const [title, setName] = useState(assignment ? assignment.title : "");
  const [description, setDescription] = useState(
    assignment ? assignment.description : ""
  );
  const [availableUntilDate, setAvailableUntilDate] = useState(
    assignment ? assignment.availabledate : ""
  );
  const [points, setPoints] = useState(assignment ? assignment.points : "");
  const [dueDate, setDueDate] = useState(assignment ? assignment.duedate : "");
  const [availableFromDate, setAvailableFromDate] = useState(
    assignment ? assignment.availabledate : ""
  );
  const [course, setCourse] = useState(assignment ? assignment.course : "");

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={assignment && assignment._id}
        onChange={(e) => setAssignmentName(e.target.value)}
      />
      <br />
      <br />
      <br />
      <textarea
        rows={9}
        cols={33}
        id="wd-description"
        onChange={(e) => setName(e.target.value)}
      >
        {assignment && assignment.description}
      </textarea>
      <br />
      <br />

      <table className="float-left p-3">
        <div>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                value={assignment && assignment.points}
                onChange={(e) => setPoints(e.target.value)}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="Assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-group-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-group-as">
                <option value="PERCENTAGE">Percentage</option>
              </select>
            </td>
          </tr>
        </div>
        <br />
        <br />
        <div className="border">
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ONLINE">Online</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label></label> <br />
            </td>
            <label>Online Entry Options</label> <br />
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </tr>
        </div>
        <br />
        <div className="border">
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            Assign to
            <br />
            <input type="text" id="wd-assign-to" value="Everyone" />
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label></label> <br />
            </td>
            Due
            <br />
            <input
              type="date"
              id="wd-due-date"
              value={assignment && assignment.duedate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <br />
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label></label> <br />
            </td>
            <label>Available from</label>
            <label>Until</label> <br />
            <input
              type="date"
              id="wd-available-from"
              value={assignment && assignment.availabledate}
              onChange={(e) => setAvailableFromDate(e.target.value)}
            />
            <input
              type="date"
              id="wd-available-until"
              value="2024-05-20"
              onChange={(e) => setAvailableUntilDate(e.target.value)}
            />
          </tr>
        </div>
        <br />
        <div className="border">
          <Link
            to={`/Kanbas/Courses/Course/Assignments`}
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            Cancel
          </Link>
          <button
            className="btn btn-lg btn-danger me-1 float-end"
            onClick={addAssignment}
          >
            Save
          </button>
        </div>
      </table>
    </div>
  );
}
