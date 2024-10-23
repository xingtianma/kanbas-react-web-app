import assignments from "../../Database/assignments.json";
import React from "react";
import { useParams } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid } = useParams();
  console.log("Assignment ID from URL:", cid);
  const assignment = assignments.find((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value={assignment && assignment._id} />
      <br />
      <br />
      <br />
      <textarea rows={9} cols={33} id="wd-description">
        {assignment && assignment.description}
      </textarea>
      <br />
      <br />

      <table className="float-left p-3">
        <div>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">
                Points
              </label>
            </td>
            <td>
              <input
                id="wd-points"
                value={assignment && assignment.points}
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
            />
            <input type="date" id="wd-available-until" value="2024-05-20" />
          </tr>
        </div>
      </table>
    </div>
  );
}
