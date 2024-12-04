import PropTypes from 'prop-types';

/**
 * A flexible section component with customizable styles
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be rendered inside the section
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {string} [props.bgColor='bg-slate-800'] - Background color class
 * @param {string} [props.textColor='text-slate-50'] - Text color class
 * @param {string} [props.padding='px-4 py-6 sm:px-6 md:px-8 lg:px-12'] - Padding classes
 * @param {string} [props.as='section'] - The HTML element to render
 * @returns {JSX.Element}
 */
export default function Section({
  children,
  className = '',
  bgColor = 'bg-slate-800',
  textColor = 'text-slate-50',
  padding = 'px-4 py-6 sm:px-6 md:px-8 lg:px-12',
  as: Component = 'section',
}) {
  return (
    <Component
      className={`
        ${padding}
        ${bgColor}
        ${textColor}
        ${className}
      `.trim()}
    >
      {children}
    </Component>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  padding: PropTypes.string,
  as: PropTypes.oneOf([
    'section',
    'div',
    'article',
    'main',
    'aside',
    'header',
    'footer',
  ]),
};

Section.defaultProps = {
  className: '',
  bgColor: 'bg-slate-800',
  textColor: 'text-slate-50',
  padding: 'px-4 py-6 sm:px-6 md:px-8 lg:px-12',
  as: 'section',
};
