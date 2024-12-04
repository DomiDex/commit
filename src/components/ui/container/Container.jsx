/**
 * A flexible container component with customizable styles
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be rendered inside the container
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {string} [props.as='div'] - The HTML element to render (e.g., 'main', 'section', 'article')
 * @param {boolean} [props.fluid=false] - Whether the container should be full-width
 * @param {string} [props.bgColor='bg-slate-800'] - Background color class
 * @param {string} [props.textColor='text-slate-50'] - Text color class
 * @returns {JSX.Element}
 */
export default function Container({
  children,
  className = '',
  as: Component = 'div',
  fluid = false,
  bgColor = 'bg-slate-800',
  textColor = 'text-slate-50',
}) {
  const baseClasses = fluid ? 'w-full' : 'container mx-auto px-4';

  return (
    <Component
      className={`
        ${baseClasses}
        ${bgColor}
        ${textColor}
        ${className}
      `.trim()}
    >
      {children}
    </Component>
  );
}
