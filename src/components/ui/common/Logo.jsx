import PropTypes from 'prop-types';
import LogoImage from '../../../assets/svg/logo/react.svg';

/**
 * A logo component with customizable image and alt text
 *
 * @param {Object} props
 * @param {string} [props.src] - The source URL for the logo image
 * @param {string} [props.alt] - The alt text for the logo image
 * @param {string} [props.className] - Additional CSS classes for the logo
 */
export default function Logo({
  src = LogoImage,
  alt = 'Logo',
  className = 'w-24 h-24',
}) {
  return (
    <div>
      <img className={className} src={src} alt={alt} />
    </div>
  );
}

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
