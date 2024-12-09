import PropTypes from 'prop-types';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
import Image from '../../ui/imageComponents/Image';
import { useState } from 'react';

// Import images statically
import projectOneImg from '../../../assets/images/project/project-one@2x.webp';
import projectTwoImg from '../../../assets/images/project/project-two@2x.webp';
import projectThreeImg from '../../../assets/images/project/Project-three@2x.webp';

const projectImages = [
  {
    src: projectOneImg,
    alt: 'Project screenshot 1',
  },
  {
    src: projectTwoImg,
    alt: 'Project screenshot 2',
  },
  {
    src: projectThreeImg,
    alt: 'Project screenshot 3',
  },
];

export default function ProjectSingleDescription({
  title = 'Innovative Web Solution',
  description = `This project involved creating a dynamic e-commerce platform
    tailored to the client's specifications. Utilizing cutting-edge
    technologies such as React for the front end and Node.js for the
    back end, we ensured a seamless user experience.`,
  titleClassName = 'text-2xl md:text-4xl font-bold text-center',
  descriptionClassName = '',
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
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
    console.error('Image failed to load:', projectImages[index]?.src);
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
            {projectImages.map((image, index) => (
              <div
                key={index}
                className='relative bg-gray-100 rounded-lg overflow-hidden'
              >
                {!imageErrors[index] ? (
                  <Image
                    src={image.src}
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

ProjectSingleDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
  imageClassName: PropTypes.string,
};
