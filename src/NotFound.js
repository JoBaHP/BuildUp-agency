import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ backgroundColor: "#95c2de" }}>
      <div
        style={{
          margin: "auto",
          height: "100vh",
          width: "600px",
          position: "relativ",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "11rem",
            position: "absolut",
            left: "20%",
            top: "10%",
          }}
        >
          4
        </div>
        <i
          class="far fa-question-circle fa-spin"
          style={{
            position: "absolute",
            fontSize: "8.5rem",
            left: "42%",
            top: "15%",
            color: "white",
          }}
        ></i>
        <div
          style={{
            color: "white",
            fontSize: "11rem",
            position: "absolute",
            left: "68%",
            top: "8%",
          }}
        >
          4
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.6rem",
            position: "absolute",
            left: "16%",
            top: "45%",
            width: "75%",
            color: "white",
          }}
        >
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
        </div>
      </div>
    </div>
  );
};

export default NotFound;
