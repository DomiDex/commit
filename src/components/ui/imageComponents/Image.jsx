import PropTypes from 'prop-types';

/**
 * Reusable Image component with built-in lazy loading
 *
 * @param {Object} props
 * @param {string} props.src - The source URL of the image
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} [props.className] - Optional CSS classes
 * @param {string} [props.loading='lazy'] - Loading strategy ('lazy' | 'eager')
 * @returns {JSX.Element}
 */
export default function Image({ src, alt, className = '', loading = 'lazy' }) {
  return <img src={src} alt={alt} className={className} loading={loading} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
};
