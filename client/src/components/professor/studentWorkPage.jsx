import Form from 'react-bootstrap/Form';

import PropTypes from 'prop-types';
const StudentWorkPage = ({ studentDetails, score, highestPossibleScore, checkboxes, handleCheckboxChange }) => {
    return (
        <div>
            <td className='checkbox'>
                <Form.Check aria-label='option 1' checked={checkboxes[0]} onChange={() => handleCheckboxChange(0)} />
            </td>
            <td className='student-name'>
                <span className='icon'>
                    <i className='bx bxs-user-circle'></i>
                </span>
                {`${studentDetails.firstName} ${studentDetails.middleName} ${studentDetails.lastName}`}
            </td>
            <td className='score'>
                <input style={{ border: '1px solid black', width: '30px' }} onChange={(event) => score(event, studentDetails._id)} />/{highestPossibleScore}
            </td>
        </div>
    );
};

StudentWorkPage.propTypes = {
    studentDetails: PropTypes.object.isRequired,
    checkboxes: PropTypes.array.isRequired,
    score: PropTypes.func.isRequired,
    highestPossibleScore: PropTypes.number.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};
export default StudentWorkPage;
