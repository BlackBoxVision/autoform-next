import React from 'react';
import PropTypes from 'prop-types';

const Check = ({ condition, onCondition, onInvalidCondition }) => condition ? onCondition() : onInvalidCondition();

Check.propTypes = {
    condition: PropTypes.bool.isRequired,
    onCondition: PropTypes.func.isRequired,
    onInvalidCondition: PropTypes.func.isRequired
};

export default Check;