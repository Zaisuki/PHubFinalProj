import '../../assets/scss/prof-scss/statistics.scss';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { getClass, getClassStatistics } from '../../services/professor';

function Statistics() {
    const [radioValue, setRadioValue] = useState('1');
    const [classes, setClasses] = useState([]);
    const [data, setData] = useState([
        { stud: 'Student No.', name: 'Name' },
        { stud: '', name: '' },
    ]);

    const handleClassChange = async (event) => {
        let classID = event.target.value;
        let result = await getClassStatistics(classID);
        result = result.message;
        result.check.forEach((check, index) => {
            setData((prevData) => {
                const newData = [...prevData]; // Copy the previous data array
                // Update the age property of the first object
                newData[0] = { ...newData[0], [`check${index + 1}`]: check.postTitle };
                newData[1] = { ...newData[1], [`check${index + 1}`]: check.highestPossibleScore };
                return newData; // Set the new data array
            });
        });
        result.connect.forEach((connect, index) => {
            setData((prevData) => {
                const newData = [...prevData]; // Copy the previous data array
                // Update the age property of the first object
                newData[0] = { ...newData[0], [`connect${index + 1}`]: connect.postTitle };
                newData[1] = { ...newData[1], [`connect${index + 1}`]: connect.highestPossibleScore };
                return newData; // Set the new data array
            });
        });
        result.students.forEach((stud, index) => {
            console.log(stud);
            // setData((prevData) => {
            //     const newData = [...prevData]; // Copy the previous data array
            //     // Update the age property of the first object
            //     newData.push()
            //     return newData; // Set the new data array
            // });
        });
        console.log(result.students);
    };
    const radios = [
        { name: 'P1', value: '1' },
        { name: 'P2', value: '2' },
        { name: 'P3', value: '3' },
    ];
    const handleDownload = (event) => {
        event.preventDefault();
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'output.xlsx');
    };
    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const classResponse = await getClass();
                setClasses(classResponse.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='card-main'>
            <Card.Body className='stat-card'>
                <Card className='stat-three'>
                    <Form.Select className='course-select-stat' onChange={handleClassChange} aria-label='def'>
                        <option className='op'>Select a Subject & Block</option>
                        {classes.map((classObj) => (
                            <option className='op' value={classObj._id} key={classObj._id}>
                                {`${classObj.subject.subjectCode}: ${classObj.block}`}
                            </option>
                        ))}
                    </Form.Select>

                    <ButtonGroup className='bg-p'>
                        {radios.map((radio, idx) => (
                            <ToggleButton className='toggle-p' key={idx} id={`radio-${idx}`} type='radio' variant={idx % 2 ? 'outline-dark' : 'outline-dark'} name='radio' value={radio.value} checked={radioValue === radio.value} onChange={(e) => setRadioValue(e.currentTarget.value)}>
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Card>
            </Card.Body>
            <div className='statistics-table'>
                <table>
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key, index) => (
                                <th key={index}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Object.values(row).map((value, cellIndex) => (
                                    <td key={cellIndex}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type='submit' onClick={handleDownload}>
                    Download
                </button>
            </div>
        </div>
    );
}

export default Statistics;
