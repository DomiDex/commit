import PropTypes from 'prop-types';

export default function ContactButton({ href, icon, text }) {
  return (
    <a
      href={href}
      className='inline-flex items-center space-x-2 text-slate-50 hover:text-amber-500 transition-colors duration-300'
    >
      <img src={icon} alt='' className='w-5 h-5' />
      <p className='text-lg'>{text}</p>
    </a>
  );
}

ContactButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
