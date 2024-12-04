import PropTypes from 'prop-types';

/**
 * A tag component for displaying project technologies or categories
 *
 * @param {Object} props
 * @param {string} [props.text] - The text to display in the tag
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element}
 */
export default function ProjectTag({ text = 'Tag', className = '' }) {
  return (
    <div
      className={`
        px-3 py-1 
        bg-amber-500 
        text-slate-800 
        font-medium 
        rounded-full 
        text-sm
        hover:bg-amber-400 
        transition-colors 
        duration-300
        ${className}
      `.trim()}
    >
      {text}
    </div>
  );
}

ProjectTag.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

ProjectTag.defaultProps = {
  text: 'Tag',
  className: '',
};
