import PropTypes from 'prop-types';

/**
 * A flexible button component that can render as either a button or link with an optional icon
 *
 * @param {Object} props
 * @param {string} props.text - The text content of the button
 * @param {string} [props.href] - URL for link variant (if provided, renders as <a>)
 * @param {function} [props.onClick] - Click handler for button variant
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.disabled] - Whether the button is disabled (button variant only)
 * @param {React.ReactNode} [props.icon] - Optional icon element to display
 * @param {('left'|'right')} [props.iconPosition='left'] - Position of the icon relative to text
 * @returns {JSX.Element}
 */
export default function MainButton({
  text = 'Schedule a call',
  href,
  onClick,
  className = '',
  disabled = false,
  icon,
  iconPosition = 'left',
}) {
  const baseStyles = `
    inline-flex items-center justify-center
    px-4 py-2
    bg-amber-500 text-slate-800 font-medium
    rounded-full
    hover:bg-amber-400
    transition-colors duration-300
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className='mr-2'>{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === 'right' && <span className='ml-2'>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={baseStyles}>
      {content}
    </button>
  );
}

MainButton.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

MainButton.defaultProps = {
  text: 'Schedule a call',
  className: '',
  disabled: false,
  iconPosition: 'left',
};
