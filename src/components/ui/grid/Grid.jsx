import PropTypes from 'prop-types';

/**
 * A flexible grid component with customizable classes
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The grid items
 * @param {string} [props.cols='grid-cols-2'] - Grid columns class for mobile
 * @param {string} [props.mdCols='md:grid-cols-4'] - Grid columns class for medium screens
 * @param {string} [props.gap='gap-4'] - Grid gap class
 * @param {string} [props.className=''] - Additional classes
 */
export default function Grid({
  children,
  cols = 'grid-cols-2',
  smCols = 'sm:grid-cols-3',
  mdCols = 'md:grid-cols-4',
  lgCols = 'lg:grid-cols-4',
  xlCols = 'xl:grid-cols-4',
  gap = 'gap-4',
  className = '',
}) {
  return (
    <div
      className={`grid ${cols} ${smCols} ${mdCols} ${lgCols} ${xlCols} ${gap} ${className}`}
    >
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
  cols: PropTypes.string,
  smCols: PropTypes.string,
  mdCols: PropTypes.string,
  lgCols: PropTypes.string,
  xlCols: PropTypes.string,
  gap: PropTypes.string,
  className: PropTypes.string,
};
