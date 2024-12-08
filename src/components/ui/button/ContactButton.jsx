import PropTypes from 'prop-types';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  phone: PhoneIcon,
  email: EnvelopeIcon,
  map: MapPinIcon,
};

/**
 * A contact button component with icon and text
 *
 * @param {Object} props
 * @param {string} props.href - The URL the button links to
 * @param {('phone'|'email'|'map')} props.iconType - Type of icon to display
 * @param {string} props.text - Button text
 */
export default function ContactButton({ href, iconType, text }) {
  const Icon = iconMap[iconType];

  return (
    <a
      href={href}
      className='inline-flex items-center space-x-2 text-slate-50 hover:text-amber-500 transition-colors duration-300'
    >
      <Icon className='w-5 h-5' aria-hidden='true' />
      <span className='text-lg'>{text}</span>
    </a>
  );
}

ContactButton.propTypes = {
  href: PropTypes.string.isRequired,
  iconType: PropTypes.oneOf(['phone', 'email', 'map']).isRequired,
  text: PropTypes.string.isRequired,
};
