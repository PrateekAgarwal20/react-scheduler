import React from 'react';
import PropTypes from 'prop-types';

const Slot = ({button, toggleFunc}) => {
    console.log('toggleFunc', toggleFunc)
    return (
        <div className="temp" onClick={toggleFunc}>
          Should Show here: {button.toString()}
        </div>
    )
}

Slot.propTypes = {
    button: PropTypes.bool,
    toggleFunc: PropTypes.func
};

export default Slot;