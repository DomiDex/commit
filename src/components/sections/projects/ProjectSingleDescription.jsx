import PropTypes from 'prop-types';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
import { useState } from 'react';

// Import all images
const images = {
  projectOne: new URL(
    '../../../assets/images/project/main-project-one@2x.webp',
    import.meta.url
  ).href,
  projectTwo: new URL(
    '../../../assets/images/project/main-project-two@2x.webp',
    import.meta.url
  ).href,
  projectThree: new URL(
    '../../../assets/images/project/main-project-three@2x.webp',
    import.meta.url
  ).href,
};

console.log('Image URLs:', images);

export default function ProjectSingleDescription({
  title = 'Innovative Web Solution',
  description = `This project involved creating a dynamic e-commerce platform
    tailored to the client's specifications. Utilizing cutting-edge
    technologies such as React for the front end and Node.js for the
    back end, we ensured a seamless user experience.`,
  titleClassName = 'text-2xl md:text-4xl font-bold text-center',
  descriptionClassName = '',
  imagesList = [
    {
      url: images.projectOne,
      alt: 'Project screenshot 1',
    },
    {
      url: images.projectTwo,
      alt: 'Project screenshot 2',
    },
    {
      url: images.projectThree,
      alt: 'Project screenshot 3',
    },
  ],
  imageClassName = 'w-full h-auto rounded-lg shadow-lg',
}) {
  const [imageErrors, setImageErrors] = useState({});

  const formattedDescription = description
    .split('\n\n')
    .map((paragraph, index) => (
      <p key={index} className={descriptionClassName}>
        {paragraph}
        {index < description.split('\n\n').length - 1 && <br />}
      </p>
    ));

  const handleImageError = (index) => {
    console.error('Image failed to load:', imagesList[index].url);
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  return (
    <Section className='relative'>
      <Container>
        <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-8 min-h-screen'>
          <div className='w-full md:w-5/12'>
            <div className='sticky top-24 flex flex-col space-y-4'>
              <h2 className={titleClassName}>{title}</h2>
              {formattedDescription}
            </div>
          </div>
          <div className='w-full md:w-7/12 flex flex-col space-y-8'>
            {imagesList.map((image, index) => (
              <div
                key={index}
                className='relative bg-gray-100 rounded-lg overflow-hidden'
              >
                {!imageErrors[index] ? (
                  <img
                    src={image.url}
                    alt={image.alt}
                    className={imageClassName}
                    loading='lazy'
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className='absolute inset-0 flex items-center justify-center bg-gray-200'>
                    <span className='text-gray-400'>Image not available</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Update PropTypes
ProjectSingleDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
  imagesList: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  imageClassName: PropTypes.string,
};

// Update defaultProps
ProjectSingleDescription.defaultProps = {
  title: 'Innovative Web Solution',
  description: `This project involved creating a dynamic e-commerce platform
    tailored to the client's specifications. Utilizing cutting-edge
    technologies such as React for the front end and Node.js for the
    back end, we ensured a seamless user experience.
    
    This project involved creating a dynamic e-commerce platform
    tailored to the client's specifications. Utilizing cutting-edge
    technologies such as React for the front end and Node.js for the
    back end, we ensured a seamless user experience.
    `,
  titleClassName: 'text-2xl font-semibold',
  descriptionClassName: '',
  imagesList: [
    {
      url: images.projectOne,
      alt: 'Project screenshot 1',
    },
    {
      url: images.projectTwo,
      alt: 'Project screenshot 2',
    },
    {
      url: images.projectThree,
      alt: 'Project screenshot 3',
    },
  ],
  imageClassName: 'w-full h-auto rounded-lg shadow-lg',
};
