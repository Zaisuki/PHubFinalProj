import Card from "react-bootstrap/Card";
import "../../assets/scss/feed.scss";
import feedImg from "../../assets/img/feed.png";
import { useEffect, useState } from "react";
import { convertDate } from "../../utils/convertDate";
import { feed } from "../../services/user";
import { cookies } from "../../services/entry";

function Feed() {
  const [announcements, setAnnouncements] = useState([]);
  const userFullName = cookies.get("userFullName");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await feed();
        setAnnouncements(response.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="feed-student">
      <div className="feed-header">
        <h1 className="user">
          Welcome to Phinma Hub, <span>{userFullName}</span>.
        </h1>
      </div>

      <Card className="feed-student-body">
        {announcements ? (
          announcements.map((announcement) => (
            <Card className="feed-content" key={announcement._id}>
              <div className="header-announcement">
                <h1>{announcement.header}</h1>
                <div className="header-time">
                  <h6>{convertDate(announcement.createdAt)}</h6>
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
          <p className="feed-no-announcement"></p>
        )}
      </Card>
    </Card>
  );
}

export default Feed;
