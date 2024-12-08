import PropTypes from 'prop-types';
import MainButton from '../../ui/button/MainButton';
import ctaBackground from '../../../assets/images/cta/cta.webp';

/**
 * A call-to-action card component with background image and customizable content
 *
 * @param {Object} props
 * @param {string} [props.title] - The main title text
 * @param {string} [props.description] - The description text
 * @param {string} [props.buttonText] - The CTA button text
 * @param {string} [props.buttonHref] - The CTA button link
 * @param {string} [props.backgroundImage] - The background image URL
 * @param {string} [props.className] - Additional CSS classes
 */
export default function CallToActionCard({
  title = "Let's Build Something Amazing Together",
  description = `Ready to transform your ideas into reality? Get in touch and let's start creating your next successful project.`,
  buttonText = "Let's Talk",
  buttonHref = '/contact',
  backgroundImage = ctaBackground,
  className = '',
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 space-y-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-white max-w-2xl'>
          {title}
        </h2>
        <p className='text-lg text-slate-200 max-w-2xl'>{description}</p>
        <MainButton
          text={buttonText}
          href={buttonHref}
          className='mt-4 text-lg px-8 py-1'
        />
      </div>
    </div>
  );
}

CallToActionCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
};
