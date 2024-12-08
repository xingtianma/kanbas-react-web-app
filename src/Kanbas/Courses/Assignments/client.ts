import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchAllAssignments = async () => {
  const response = await axiosWithCredentials.get(ASSIGNMENT_API);
  return response.data;
};

export const fetchAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const updateAssignment = async (assignment: any, assignmentUpdate: any) => {
  const response = await axiosWithCredentials.put(`${COURSES_API}/${assignment.course}/${assignment._id}`, assignmentUpdate);
  return response.data;
};

export const deleteAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.delete(`${COURSES_API}/${assignment.course}/${assignment._id}`);
  return response.data;
};