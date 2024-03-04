import PropTypes from 'prop-types';
const LinkPreview = ({ Url }) => {
    return (
        <a href={Url}>
            {/* Render the image preview if imageUrl is provided */}
            {Url && Url}
        </a>
    );
};
LinkPreview.propTypes = {
    Url: PropTypes.string.isRequired,
};
export default LinkPreview;
