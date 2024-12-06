import PropTypes from 'prop-types';
import { useTheme } from '../../../context/ThemeContext';

/**
 * A flexible container component with customizable styles
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be rendered inside the container
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * @param {string} [props.as='div'] - The HTML element to render
 * @param {boolean} [props.fluid=false] - Whether the container should be full-width
 * @param {string} [props.bgColor='bg-transparent'] - Background color class
 * @param {string} [props.textColor=''] - Text color class
 * @returns {JSX.Element}
 */
export default function Container({
  children,
  className = '',
  as: Component = 'div',
  fluid = false,
  bgColor = 'bg-transparent',
  textColor = '',
}) {
  const { theme } = useTheme();
  const baseClasses = fluid ? 'w-full' : 'container mx-auto px-4';

  return (
    <Component
      className={`
        ${baseClasses}
        ${bgColor}
        ${textColor || theme.text}
        ${className}
      `.trim()}
    >
      {children}
    </Component>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.oneOf([
    'div',
    'main',
    'article',
    'section',
    'aside',
    'header',
    'footer',
  ]),
  fluid: PropTypes.bool,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
