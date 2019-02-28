import classNames        from 'classnames';
import PropTypes         from 'prop-types';
import React             from 'react';
import { IconPriceMove } from 'Assets/Trading/icon-price-move.jsx';

const LastDigitPointer = ({
    is_loss,
    is_won,
    position,
}) => (
    <span
        className='digits__pointer'
        style={{ marginLeft: position }}
    >
        <IconPriceMove
            className={classNames('digits__icon', {
                'digits__icon--win' : is_won,
                'digits__icon--loss': is_loss,
            })}
            classNamePath='digits__icon-color'
            type='profit'
        />
    </span>
);

LastDigitPointer.propTypes = {
    is_loss : PropTypes.bool,
    is_won  : PropTypes.bool,
    position: PropTypes.number,
};

export default LastDigitPointer;
