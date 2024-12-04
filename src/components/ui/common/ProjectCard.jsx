import PropTypes from 'prop-types';
import ProjectTag from './ProjectTag';

/**
 * A card component for displaying project information
 *
 * @param {Object} props
 * @param {string} props.title - The title of the project
 * @param {string} props.description - The project description
 * @param {string} props.image - The project image URL
 * @param {string} props.imageAlt - The alt text for the project image
 * @param {Array<string>} [props.tags] - Array of tags to display
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element}
 */
export default function ProjectCard({
  title = 'Project Title',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image,
  imageAlt = 'Project Image',
  tags = [],
  className = '',
}) {
  return (
    <a
      href='/projects/single-project'
      className={`w-full md:w-10/12 mx-auto flex flex-col items-center justify-center rounded-2xl overflow-hidden relative group ${className}`}
    >
      <img className='w-full h-auto' src={image} alt={imageAlt} />
      <div className='w-full flex flex-row items-start justify-between space-y-4 bg-slate-700 p-4'>
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
      <div className='absolute top-0 left-0 w-full h-full backdrop-blur-none group-hover:backdrop-blur-sm bg-slate-700/0 group-hover:bg-slate-700/60 transition-all duration-300 flex items-center justify-center'>
        <p className='text-sm px-4 py-2 bg-amber-500 rounded-full text-slate-800 font-medium group-hover:block hidden transition-all duration-300'>
          View Project
        </p>
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
  className: PropTypes.string,
};

ProjectCard.defaultProps = {
  title: 'Project Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: '',
  imageAlt: 'Project Image',
  tags: ['React', 'Next.js', 'Tailwind CSS'],
  className: '',
};
