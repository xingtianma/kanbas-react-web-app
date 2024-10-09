export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea rows={9} cols={33} id="wd-description">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <br />
      
      <table className ="float-left p-3">
      <div>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
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
            <input type="date" id="wd-due-date" value="2024-05-13" />
            <br />
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label></label> <br />
            </td>
            <label>Available from</label>
            <label>Until</label> <br />
            <input type="date" id="wd-available-from" value="2024-05-06" />
            <input type="date" id="wd-available-until" value="2024-05-20" />
          </tr>
        </div>
      </table>
    </div>
  );
}
