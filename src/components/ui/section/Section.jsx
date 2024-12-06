import PropTypes from 'prop-types';
import { useTheme } from '../../../context/ThemeContext';

/**
 * A flexible section component with customizable styles
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be rendered inside the section
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @param {string} [props.bgColor=''] - Background color class
 * @param {string} [props.textColor=''] - Text color class
 * @param {string} [props.padding='px-4 py-8 sm:px-8 md:px-16 md:py-24'] - Padding classes
 * @param {string} [props.as='section'] - The HTML element to render
 * @returns {JSX.Element}
 */
export default function Section({
  children,
  className = '',
  bgColor = '',
  textColor = '',
  padding = 'px-4 py-8 sm:px-8 md:px-16 md:py-24',
  as: Component = 'section',
}) {
  const { theme } = useTheme();

  return (
    <Component
      className={`
        ${padding}
        ${bgColor || theme.background}
        ${textColor || theme.text}
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
