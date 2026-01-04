import { useEffect, useState } from "react";
import { apiRequest } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";
import "./AddCourse.css";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    courseName: "",
    instructor: "",
    description: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest(`/courses/${id}`).then(setCourse);
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();

    if (!course.courseName || !course.instructor) {
      setError("Course name and instructor are required");
      return;
    }

    try {
      await apiRequest(`/courses/${id}`, "PUT", course);
      navigate("/courses");
    } catch {
      setError("Failed to update course");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Edit Course</h2>
        <p className="auth-subtitle">Update course details</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={submit}>
          <div className="input-group">
            <label>Course Name</label>
            <input
              value={course.courseName}
              onChange={(e) =>
                setCourse({ ...course, courseName: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <label>Instructor</label>
            <input
              value={course.instructor}
              onChange={(e) =>
                setCourse({ ...course, instructor: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              value={course.description}
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
          </div>

          <button className="auth-btn">Update Course</button>

          <button
            type="button"
            className="auth-link-btn"
            onClick={() => navigate("/courses")}
          >
            ← Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
