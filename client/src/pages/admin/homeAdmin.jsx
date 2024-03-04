import "../../assets/scss/admin-scss/home.scss";
import { FaUser, FaUserShield, FaUserGraduate  } from "react-icons/fa";
import { FaUserTie, FaUserPlus  } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function HomeAdmin() {
    const navigate = useNavigate();
  return (
    <div className="admin-home">
      <div className="feed-header">
        <h1 className="user">
          Welcome to <span>Phinma Hub</span>.
        </h1>
      </div>
      <h1 className="where">Where do you want to go?</h1>
      <div className="buttons">
        <div className="divide">
          <div className="enroll" onClick={() => navigate("/create-student")}>
            <FaUser className="i" />
            <h1> Enroll Student</h1>
          </div>
        </div>
        <div className="divide">
          <div className="professor" onClick={() => navigate("create-professor")}>
            <FaUserTie className="i" />
            <h1> Enlist Professor</h1>
          </div>
        </div>
        <div className="divide">
          <div className="admin-regis" onClick={() => navigate("/create-admin")}>
            <FaUserShield className="i" />
            <h1>Admin Registration</h1>
          </div>
        </div>
        <div className="divide">
          <div className="subject-regis" onClick={() => navigate("create-subject")}>
            <MdOutlineMenuBook  className="i" />
            <h1>Subject Registration</h1>
          </div>
        </div>
        <div className="divide">
          <div className="assign-prof"  onClick={() => navigate("create-classt")}>
            <FaUserPlus  className="i" />
            <h1>Assigning Professor</h1>
          </div>
        </div>
        <div className="divide">
          <div className="assign-student" onClick={() => navigate("enroll-student-clas")}>
            <FaUserGraduate  className="i" />
            <h1>Student Assigned Class</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
