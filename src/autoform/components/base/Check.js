import PropTypes from 'prop-types';

const Check = ({ verify, renderOnValid, renderOnInvalid }) => {
    if (verify) {
        return renderOnValid();
    } else {
        return renderOnInvalid();
    }
};

Check.propTypes = {
    verify: PropTypes.bool.isRequired,
    renderOnValid: PropTypes.func.isRequired,
    renderOnInvalid: PropTypes.func.isRequired
};

export default Check;