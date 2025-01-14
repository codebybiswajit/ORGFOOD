import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminControlUser() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");
  const [feedbackMessage, setfeedbackMessage] = useState("");

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("/api/feedback/allfeedback", {
          withCredentials: true,
        });

        setIsAdmin(true);
        setFeedbacks(response.data.data); // Assuming response.data has a 'data' field that contains the array
      } catch (error) {
        setIsAdmin(false);
        setError(error.response?.data?.message || "Failed to load feedbacks");
        console.error("Error fetching feedbacks:", error);
        setTimeout(() => {
          setError('')
        }, 3000);
      }
    };
    fetchFeedbacks();
  }, []);

  const handleDelete = async (feedbackId) => {
    try {
      const response = await axios.delete(`/api/feedback/${feedbackId}`, {
        withCredentials: true,
      });
      setFeedbacks(feedbacks.filter((feedback) => feedback._id !== feedbackId));
      setfeedbackMessage(response.data.message);

      setTimeout(() => {
        setfeedbackMessage('')
      }, 1000);
    } catch (error) {
      console.error("Error deleting feedback:", error);
      setError(error.response?.data?.message || "Failed to delete feedback");
      setTimeout(() => {
        setError('')
      }, 2000);
    }
  };
  const styles = {
    userDetails: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
      flexGrow: 1,
    },
    actions: {
      gap: "10px",
    },
  };
 return (
    <div
      className="pt-10 pb-100 h-auto"
      style={{
        background: `transparent`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      {!isAdmin ? (
        <p className="text-center fs-1 text-danger">Admin Access Required</p>
      ) : (
        <>
          {error && (
            <p className="text-center fs-1 text-danger f-w-400">{error}</p>
          )}
          {feedbackMessage && <p className="text-center text-primary fs-3  f-w-400">{feedbackMessage}</p>}
          <div className="container d-flex flex-column flex-wrap justify-content-center align-content-center p-5">
            <p className="d-flex justify-content-end align-content-center text-dark">
              no of feedbacks: {feedbacks.length}
            </p>
            {feedbacks.map((feedback) => (
              <div
                key={feedback._id}
                className="card shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <div
                  className="card-body shadow-lg bg-transparent rounded-5"
                  style={styles.userDetails}
                >
                  <div className="d-flex flex-row flex-wrap">
                    <p className="me-4">
                      <strong>ID:</strong> {feedback._id}
                    </p>
                    <p className="me-4">
                      <strong>Name:</strong> {feedback.name}
                    </p>
                    <p className="me-4">
                      <strong>Email:</strong> {feedback.email}
                    </p>
                    <p className="me-4">
                      <strong>Phone Number:</strong> {feedback.phoneNo}
                    </p>
                    <div className="d-flex flex-column ">
                      <p className="me-4">
                        <strong>Subject:</strong> {feedback.subject}
                      </p>
                      <p className="me-4">
                        <strong>Message:</strong> {feedback.message}
                      </p>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-between align-content-center flex-row me-5"
                    style={styles.actions}
                  >
                    <button
                      className="btn btn-light btn-outline-danger text-dark fs-4 " style={{borderRadius : '1em'}}
                      onClick={() => handleDelete(feedback._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
