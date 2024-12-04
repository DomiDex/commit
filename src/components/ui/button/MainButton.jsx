import PropTypes from 'prop-types';

/**
 * A flexible button component that can render as either a button or link
 *
 * @param {Object} props
 * @param {string} props.text - The text content of the button
 * @param {string} [props.href] - URL for link variant (if provided, renders as <a>)
 * @param {function} [props.onClick] - Click handler for button variant
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.disabled] - Whether the button is disabled (button variant only)
 * @returns {JSX.Element}
 */
export default function MainButton({
  text = 'Schedule a call',
  href,
  onClick,
  className = '',
  disabled = false,
}) {
  const baseStyles =
    'px-4 py-1 bg-amber-500 text-slate-800 font-medium rounded-full hover:bg-amber-400 transition-colors duration-300';

  // If href is provided, render as link
  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`}>
        {text}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {text}
    </button>
  );
}

MainButton.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

MainButton.defaultProps = {
  text: 'Schedule a call',
  className: '',
  disabled: false,
};
