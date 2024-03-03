import Card from "react-bootstrap/Card";
import "../../assets/scss/feed.scss";
import { useEffect, useState } from "react";
import { convertDate } from "../../utils/convertDate";
import { feed, profile } from "../../services/user";

function Feed() {
  const [announcements, setAnnouncements] = useState([]);
  const [userInformation, setUserInformation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await feed();
        setAnnouncements(response.message);

  
        const userProfile = await profile();
        setUserInformation(() => {
          if (userProfile.userType === "student") {
            return userProfile.studentInformation;
          } else if (userProfile.userType === "professor") {
            return userProfile.professorInformation;
          } else {
            return userProfile.adminInformation;
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="feed-container">
      <div className="left-column">
        <Card className="feed-student">
          <div className="feed-header">
            <h1 className="user">
              Welcome to Phinma Hub, <span>{userInformation?.firstName}</span>.
            </h1>
          </div>
          <div className="feed-student-body">
            <div className="feed-lang">
              {announcements ? (
                announcements.map((announcement) => (
                  <Card className="feed-content" key={announcement._id}>
                    <div className="header-announcement">
                      <h1>{announcement.header}</h1>
                      <div className="header-time">
                        {convertDate(announcement.createdAt)}
                      </div>
                    </div>
                    <div className="announce">
                      <p>{announcement.announcement}</p>
                      {announcement.class && (
                        <h1>{announcement.class.subject.subjectCode}</h1>
                      )}
                    </div>
                    <h1 className="professor">
                      {announcement.professor.firstName}{" "}
                      {announcement.professor.lastName}
                    </h1>
                  </Card>
                ))
              ) : (
                <p className="feed-no-announcement">No announcements</p>
              )}
            </div>
          </div>
      <div className="right-column">
        <h1>ak</h1>

      </div>
        </Card>
      </div>
    </div>
    
  );
}

export default Feed;
