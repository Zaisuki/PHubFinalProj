import "../../assets/scss/prof-scss/statistics.scss";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { getClass, getClassStatistics } from "../../services/professor";

function Statistics() {
  const [radioValue, setRadioValue] = useState("1");
  const [classes, setClasses] = useState([]);
  const [connectTask, setConnectTask] = useState([]);
  const [checkTask, setCheckTask] = useState([]);
  const [students, setStudents] = useState([]);
  const [currentClassID, setClassID] = useState("");
  const [data, setData] = useState([
    { stud: "Student No.", name: "Name" },
    { stud: "", name: "" },
  ]);

  const handleClassChange = async (event) => {
    let classID = event.target.value;
    setClassID(classID);
    let result = await getClassStatistics(classID);
    result = result.message;
    setData([
      { stud: "Student No.", name: "Name" },
      { stud: "", name: "" },
    ]);
    setStudents([]);
    setCheckTask([]);
    setConnectTask([]);
    if (result.check) {
      result.check.forEach((check, index) => {
        setCheckTask((prevData) => [...prevData, check._id]);
        setData((prevData) => {
          const newData = [...prevData];
          newData[0] = {
            ...newData[0],
            [`check${index + 1}`]: check.postTitle,
          };
          newData[1] = {
            ...newData[1],
            [`check${index + 1}`]: check.highestPossibleScore,
          };
          return newData;
        });
      });
    }
    if (result.connect) {
      result.connect.forEach((connect, index) => {
        setConnectTask((prevData) => [...prevData, connect._id]);
        setData((prevData) => {
          const newData = [...prevData];
          newData[0] = {
            ...newData[0],
            [`connect${index + 1}`]: connect.postTitle,
          };
          newData[1] = {
            ...newData[1],
            [`connect${index + 1}`]: connect.highestPossibleScore,
          };
          return newData;
        });
      });
    }
    setStudents(result.students);
  };
  const radios = [
    { name: "P1", value: "1" },
    { name: "P2", value: "2" },
    { name: "P3", value: "3" },
  ];
  const handleDownload = (event) => {
    event.preventDefault();
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "output.xlsx");
  };
  useEffect(() => {
    students.forEach((stud) => {
      let newData = {
        studNo: stud.studentID,
        name: `${stud.firstName} ${stud.middleName} ${stud.lastName}`,
      };
      checkTask.forEach((value, index) => {
        if (stud.studentSubjects[0].studentCheckSubmission.length > 0) {
          // stud.studentSubjects[0].studentCheckSubmission.some((check, index) => {
          //     if (check.task._id === value) {
          //         newData[`check${index}`] = check.score ? check.score : 0;
          //         return true; // exit loop
          //     }
          //     return false; // continue loop
          // });
          const foundCheck =
            stud.studentSubjects[0].studentCheckSubmission.find(
              (check, index) => {
                if (check.task._id === value) {
                  newData[`check${index}`] = check.score ? check.score : 0;
                  return true; // exit loop
                }
                return false; // continue loop
              }
            );
          if (!foundCheck) {
            newData[`check${index}`] = 0;
          }
        } else {
          newData[`check${index}`] = 0;
        }
      });
      connectTask.forEach((value, index) => {
        if (stud.studentSubjects[0].studentConnectSubmission.length > 0) {
          // stud.studentSubjects[0].studentConnectSubmission.forEach((connect, index) => {
          //     if (connect.task._id === value) {
          //         newData[`connect${index}`] = connect.score ? connect.score : 0;
          //     }
          // });
          const foundConnect =
            stud.studentSubjects[0].studentConnectSubmission.find(
              (connect, index) => {
                if (connect.task._id === value) {
                  newData[`connect${index}`] = connect.score
                    ? connect.score
                    : 0;
                  return true; // exit loop
                }
                return false; // continue loop
              }
            );
          if (!foundConnect) {
            newData[`connect${index}`] = 0;
          }
        } else {
          newData[`connect${index}`] = 0;
        }
      });
      console.log(newData);
      setData((prevData) => [...prevData, newData]);
    });
  }, [students, checkTask, connectTask]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classResponse = await getClass();
        setClasses(classResponse.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mainmain">
         <div className="stat-header">
        <h1 className="user">
          Welcome to <span>Phinma Statistics</span>.
        </h1>
      </div>
    <div className="card-main">
     
      <Card.Body className="stat-card">
        <div className="stat-three">
          <Form.Select
            className="course-select-stat"
            onChange={handleClassChange}
            aria-label="def"
          >
            <option className="op">Select a Subject & Block</option>
            {classes.map((classObj) => (
              <option className="op" value={classObj._id} key={classObj._id}>
                {`${classObj.subject.subjectCode}: ${classObj.block}`}
              </option>
            ))}
          </Form.Select>

          <ButtonGroup className="bg-p">
            {radios.map((radio, idx) => (
              <ToggleButton
                className="toggle-p"
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "light" : "light"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
      </Card.Body>
      <div className="statistics-table">
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key, index) => (
                <th className="teehe" key={index}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, cellIndex) => (
                  <td className="teede" key={cellIndex}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button className="dldl" type="submit" onClick={handleDownload}>
<span className="dldldl">Download</span>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Statistics;
