import "../assets/scss/notification.scss";
import Table from "react-bootstrap/Table";

function Notification() {
  return (
    <Table hover>
      <thead className="table-header">
        <tr>
          <th>From</th>
          <th>Content</th>
          <th>Time/Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="from">Anakin Skywalker</td>
          <td className="content">CHECK: Lesson 14, Stress Management and Recreation</td>
          <td className="time-date">Jan 14, 2024</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Notification;
