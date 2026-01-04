import { useState } from "react";
import { apiRequest } from "../api/api";
import { useNavigate } from "react-router-dom";
import "./AddCourse.css";

const AddCourse = () => {
  const [course, setCourse] = useState({
    courseName: "",
    instructor: "",
    description: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    if (!course.courseName || !course.instructor) {
      setError("Course name and instructor are required");
      return;
    }

    try {
      await apiRequest("/courses", "POST", course);
      navigate("/courses");
    } catch {
      setError("Failed to create course");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Add Course</h2>
        <p className="auth-subtitle">Enter course details below</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={submit}>
          <div className="input-group">
            <label>Course Name</label>
            <input
              type="text"
              placeholder="Data Structures"
              value={course.courseName}
              onChange={(e) =>
                setCourse({ ...course, courseName: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <label>Instructor</label>
            <input
              type="text"
              placeholder="Dr. John Doe"
              value={course.instructor}
              onChange={(e) =>
                setCourse({ ...course, instructor: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              placeholder="Short course description"
              value={course.description}
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
          </div>

          <button className="auth-btn" type="submit">
            Create Course
          </button>

          <button
            type="button"
            className="auth-link-btn"
            onClick={() => navigate("/courses")}
          >
            ← Back to Courses
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
