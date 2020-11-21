import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}> {children} </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  onClick: () => alert('Возникла ошибка, попробуйте позже')
}

export default Button;
