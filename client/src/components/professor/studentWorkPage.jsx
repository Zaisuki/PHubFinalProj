import Form from 'react-bootstrap/Form';

import PropTypes from 'prop-types';
const StudentWorkPage = ({ name, studentScore, highestPossibleScore, checkboxes, handleCheckboxChange, handleStudentNameClick }) => {
    return (
        <tr>
            <td className='checkbox'>
                <Form.Check aria-label='option 1' checked={checkboxes[0]} onChange={() => handleCheckboxChange(0)} />
            </td>
            <td className='student-name' onClick={() => handleStudentNameClick(name)}>
                <span className='icon'>
                    <i className='bx bxs-user-circle'></i>
                </span>
                {name}
            </td>
            <td className='score'>
                {studentScore}/{highestPossibleScore}
            </td>
        </tr>
    );
};

StudentWorkPage.propTypes = {
    name: PropTypes.string.isRequired,
    checkboxes: PropTypes.array.isRequired,
    studentScore: PropTypes.string.isRequired,
    highestPossibleScore: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    handleStudentNameClick: PropTypes.func.isRequired,
};
export default StudentWorkPage;
