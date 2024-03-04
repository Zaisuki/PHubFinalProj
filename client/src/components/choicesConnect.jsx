import PropTypes from 'prop-types';
import convertPercentage from '../utils/convertPercentage';
const ChoicesConnect = ({ data, totalStudents, choiceFunction, selectedChoice }) => {
    return (
        <div>
            <input type='radio' value={data._id} onChange={choiceFunction} checked={selectedChoice === data._id} />
            <span>{data.choice}</span>
            <span>{convertPercentage(data.respondents, totalStudents)}%</span>
        </div>
    );
};
ChoicesConnect.propTypes = {
    data: PropTypes.object.isRequired,
    totalStudents: PropTypes.number.isRequired,
    choiceFunction: PropTypes.func,
    selectedChoice: PropTypes.string,
};
export default ChoicesConnect;
