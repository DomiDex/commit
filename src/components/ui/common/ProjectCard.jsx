import PropTypes from 'prop-types';
import ProjectTag from './ProjectTag';
import { useTheme } from '../../../context/ThemeContext';
import { useState } from 'react';
import Image from '../imageComponents/Image';

/**
 * A card component for displaying project information
 *
 * @param {Object} props
 * @param {string} props.title - The title of the project
 * @param {string} props.description - The project description
 * @param {string} props.image - The project image URL
 * @param {string} props.imageAlt - The alt text for the project image
 * @param {Array<string>} [props.tags] - Array of tags to display
 * @param {string} [props.href] - The link URL
 * @returns {JSX.Element}
 */
export default function ProjectCard({
  title = '',
  description = '',
  image = '',
  imageAlt = '',
  tags = [],
  href = '/projects/single-project',
}) {
  const { theme } = useTheme();
  const [imageError, setImageError] = useState(false);

  return (
    <a
      href={href}
      className={`h-full w-full md:w-10/12 mx-auto flex flex-col rounded-2xl overflow-hidden relative group hover:shadow-xl`}
    >
      <div className='relative pt-[56.25%] overflow-hidden bg-gray-100'>
        {!imageError ? (
          <Image
            src={image}
            alt={imageAlt}
            className='absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'
            loading='lazy'
            onError={(e) => {
              console.error('Image failed to load:', e);
              setImageError(true);
            }}
          />
        ) : (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-200'>
            <span className='text-gray-400'>
              Image not available: {image.substring(0, 100)}...
            </span>
          </div>
        )}
      </div>
      <div
        className={`flex-1 flex flex-col justify-between ${theme.lightBg} p-4`}
      >
        <div className='flex flex-row items-start justify-between'>
          <div className='flex flex-col items-start justify-start space-y-4'>
            <p className='text-2xl font-bold'>{title}</p>
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag, index) => (
                <ProjectTag key={index} text={tag} />
              ))}
            </div>
          </div>
          <p className='text-sm w-5/12'>{description}</p>
        </div>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  href: PropTypes.string,
};
