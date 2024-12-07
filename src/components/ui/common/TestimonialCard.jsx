import PropTypes from 'prop-types';

/**
 * A testimonial card component with customizable content
 *
 * @param {Object} props
 * @param {string} [props.starIcon] - The star rating icon source
 * @param {string} [props.quote] - The testimonial quote
 * @param {string} [props.profileImage] - The testimonial author's image
 * @param {string} [props.authorName] - The author's name
 * @param {string} [props.authorTitle] - The author's title/position
 * @param {string} [props.className] - Additional CSS classes
 */
export default function TestimonialCard({
  starIcon = 'src/assets/svg/Testimonial/Stars.svg',
  quote = "The project exceeded our expectations, showcasing exceptional skill and dedication. We couldn't be happier with the results!",
  profileImage = 'src/assets/images/testimonial/test-profile.webp',
  authorName = 'John Doe',
  authorTitle = 'CEO, Company Name',
  className = '',
}) {
  return (
    <div className={`flex flex-col items-start space-y-4 ${className}`}>
      <img className='w-36 h-auto' src={starIcon} alt='Testimonial star' />
      <p className='text-lg italic'>&quot;{quote}&quot;</p>
      <div className='flex items-center space-x-2'>
        <img
          className='w-12 rounded-full h-auto'
          src={profileImage}
          alt={`${authorName}'s profile`}
        />
        <div>
          <h3 className='text-lg font-bold'>{authorName}</h3>
          <p className='text-sm'>{authorTitle}</p>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  starIcon: PropTypes.string,
  quote: PropTypes.string,
  profileImage: PropTypes.string,
  authorName: PropTypes.string,
  authorTitle: PropTypes.string,
  className: PropTypes.string,
};
