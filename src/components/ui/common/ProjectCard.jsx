import PropTypes from 'prop-types';
import ProjectTag from './ProjectTag';
import { useTheme } from '../../../context/ThemeContext';

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
  href = '#',
}) {
  const { theme } = useTheme();

  return (
    <a
      href={href}
      className={`w-full md:w-10/12 mx-auto flex flex-col items-center justify-center rounded-2xl overflow-hidden relative group hover:shadow-xl`}
    >
      <div className='overflow-hidden'>
        <img
          className='w-full h-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'
          src={image}
          alt={imageAlt}
        />
      </div>
      <div
        className={`w-full flex flex-row items-start justify-between space-y-4 ${theme.lightBg} p-4`}
      >
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
