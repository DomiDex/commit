import PropTypes from 'prop-types';
import { StarIcon } from '@heroicons/react/20/solid';

/**
 * A testimonial card component displaying customer feedback
 *
 * @param {Object} props
 * @param {number} [props.stars=5] - Number of stars to display (1-5)
 * @param {string} props.quote - The testimonial text
 * @param {string} props.profileImage - URL of the author's profile image
 * @param {string} props.authorName - Name of the testimonial author
 * @param {string} props.authorTitle - Title/position of the author
 * @param {string} [props.className=''] - Additional CSS classes
 */
export default function TestimonialCard({
  stars = 5,
  quote,
  profileImage,
  authorName,
  authorTitle,
  className = '',
}) {
  return (
    <div className={`flex flex-col items-start space-y-4 ${className}`}>
      <div className='flex space-x-1'>
        {[...Array(stars)].map((_, index) => (
          <StarIcon
            key={index}
            className='w-6 h-6 text-amber-500'
            aria-hidden='true'
          />
        ))}
      </div>
      <p className='text-lg italic'>&quot;{quote}&quot;</p>
      <div className='flex items-center space-x-2'>
        <img
          className='w-12 h-12 rounded-full object-cover'
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
  stars: PropTypes.number,
  quote: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
};
