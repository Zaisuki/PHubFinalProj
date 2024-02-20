import "../assets/scss/profile.scss";
import picon from "../assets/img/mygirl.jpg";
import Card from "react-bootstrap/Card";
import { profile } from "../services/user";
import Loading from "./loading";

function Profile() {
    const [data, setData] = useState(null);
    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await profile();
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      if (!data) {
        return <Loading />;
      }
    
  return (
    <Card.Body className="card-booty">
      <Card className="one">
        <img className="profile-img" src={picon} alt="profile" />
        <h1>Neeguh Paterno</h1>
        <h2>098763340965</h2>
        <h3>niga.paterno.up@phinmaed.com</h3>
        <div className="line"></div>
      </Card>
      <Card className="two">
        <h1>Year/Grade:</h1>
        <h2>2nd</h2>
      </Card>
      <Card className="three">
        <h1>Block:</h1>
        <h2>BSIT2-03</h2>
      </Card>
      <Card className="four">
        <h1>Course:</h1>
        <h2>Semester:</h2>
        <h3>
          BSIT-Bachelor of Science in Information<br></br> Technology
        </h3>
        <h4>Second</h4>
      </Card>
      <Card className="five">
        <h1>Personal Data</h1>
        <h2>Last Name</h2>
      </Card>
      <Card className="six">
        <h1>Ventti</h1>
      </Card>
      <Card className="seven">
        <h1>First Name</h1>
        <h2>Latte</h2>
      </Card>

      <Card className="eight">
        <h1>Middle Name</h1>
        <h2>Pls</h2>
      </Card>

      <Card className="nine">
        <h1>Birth Date</h1>
        <h2>Aba malay ko sayo</h2>
      </Card>

      <Card className="ten">
        <h1>Contact Number</h1>
        <h2>Madik ammo</h2>
      </Card>

      <Card className="eleven">
        <h1>Current Address(House#, Street, Brgy, City)</h1>
        <h2>Keta kyeng bale</h2>
      </Card>

      <Card className="twelve">
        <h1>School Email</h1>
        <h2>Shanong@gmail.com</h2>
      </Card>
    </Card.Body>
  );
}
export default Profile;
