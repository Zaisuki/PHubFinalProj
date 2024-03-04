import '../../assets/scss/prof-scss/statistics.scss';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState } from 'react';
import * as XLSX from 'xlsx';

function Statistics() {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'P1', value: '1' },
        { name: 'P2', value: '2' },
        { name: 'P3', value: '3' },
    ];

    const [excelData, setExcelData] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const binaryString = event.target.result;
            const workbook = XLSX.read(binaryString, { type: 'binary' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            setExcelData(data);
        };

        reader.readAsBinaryString(file);
    };

    return (
        <div className='card-main'>
            <Card.Body className='stat-card'>
                <Card className='stat-three'>
                    <Form.Select className='course-select-stat' aria-label='def'>
                        <option className='op'>Select a Subject & Block</option>
                        <option className='op' value='1'>
                            ITE 30
                        </option>
                        <option className='op' value='2'>
                            ITE 400
                        </option>
                        <option className='op' value='3'>
                            ITE 186
                        </option>
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
                <input type='file' onChange={handleFileUpload} />
                <table>
                    <tbody>
                        {excelData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Statistics;
