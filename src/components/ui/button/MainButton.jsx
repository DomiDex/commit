import PropTypes from 'prop-types';

/**
 * Main button component with consistent styling
 *
 * @param {Object} props
 * @param {string} [props.text='Schedule a call'] - Button text
 * @param {string} [props.href] - Optional URL for link buttons
 * @param {function} [props.onClick] - Click handler
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export default function MainButton({
  text = 'Schedule a call',
  href,
  onClick,
  className = '',
}) {
  const baseStyles = `
    inline-flex items-center justify-center
    px-4 py-2
    bg-amber-500 text-slate-800
    rounded-full
    hover:bg-amber-400
    transition-colors duration-300
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {text}
    </button>
  );
}

MainButton.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
