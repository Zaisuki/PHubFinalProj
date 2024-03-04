import PropTypes from 'prop-types';
const ImagePreview = ({ imageUrl }) => {
    return (
        <a href={imageUrl}>
            {/* Render the image preview if imageUrl is provided */}
            {imageUrl && <img src={imageUrl} alt='Preview' style={{ maxWidth: '100%', maxHeight: '100%' }} />}
        </a>
    );
};
ImagePreview.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};
export default ImagePreview;
