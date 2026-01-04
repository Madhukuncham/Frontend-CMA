// import { useEffect, useState } from "react";
// import { apiRequest } from "../api/api";

// const Courses = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     apiRequest("/courses").then(setCourses);
//   }, []);

//   const deleteCourse = async (id) => {
//     await apiRequest(`/course/${id}`, "DELETE");
//     setCourses(courses.filter((c) => c.id !== id));
//   };

//   return (
//     <div>
//       <h2>Courses</h2>
//       {courses.map((course) => (
//         <div key={course.id}>
//           <h3>{course.courseName}</h3>
//           <p>{course.instructor}</p>
//           <button onClick={() => deleteCourse(course.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Courses;
// import { useEffect, useState } from "react";
// import { apiRequest } from "../api/api";
// import { Link } from "react-router-dom";
// import "./Courses.css";

// const Courses = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     apiRequest("/courses").then(setCourses);
//   }, []);

//   const deleteCourse = async (id) => {
//     await apiRequest(`/courses/${id}`, "DELETE");
//     setCourses((prev) => prev.filter((c) => c.id !== id));
//   };

//   return (
//     <div className="courses-container">
//       <div className="courses-header">
//         <h2>Courses</h2>
//         <Link to="/add-course">
//           <button className="add-course-btn">Add Course</button>
//         </Link>
//       </div>

//       {courses.length === 0 ? (
//         <p className="no-courses">No courses found</p>
//       ) : (
//         <div className="courses-grid">
//           {courses.map((course) => (
//             <div key={course.id} className="course-card">
//               <h3>{course.courseName}</h3>
//               <p><strong>Instructor:</strong> {course.instructor}</p>
//               <button
//                 className="delete-btn"
//                 onClick={() => deleteCourse(course.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Courses;
import { useEffect, useState } from "react";
import { apiRequest } from "../api/api";
import { Link } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    apiRequest("/courses").then(setCourses);
  }, []);

  const deleteCourse = async (id) => {
    try {
      await apiRequest(`/courses/${id}`, "DELETE");
      setCourses((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert("Failed to delete course");
    }
  };

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h2>Courses</h2>
        <Link to="/add-course" className="add-btn">
          + Add Course
        </Link>
      </div>

      {courses.length === 0 && <p>No courses available</p>}

      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.courseName}</h3>
            <p className="instructor">Instructor: {course.instructor}</p>

            <div className="actions">
              <Link to={`/edit-course/${course.id}`} className="edit-btn">
                Edit
              </Link>
              <button
                className="delete-btn"
                onClick={() => deleteCourse(course.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
