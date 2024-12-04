import PropTypes from 'prop-types';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';

export default function ProjectSingleDescription({
  title = 'Innovative Web Solution',
  description = `This project involved creating a dynamic e-commerce platform
    tailored to the client's specifications. Utilizing cutting-edge
    technologies such as React for the front end and Node.js for the
    back end, we ensured a seamless user experience.`,
  titleClassName = 'text-2xl font-semibold',
  descriptionClassName = '',
  images = [
    {
      url: 'https://placehold.co/600x400',
      alt: 'Project screenshot 1',
    },
    {
      url: 'https://placehold.co/600x400',
      alt: 'Project screenshot 2',
    },
    {
      url: 'https://placehold.co/600x400',
      alt: 'Project screenshot 3',
    },
  ],
  imageClassName = 'w-full h-auto rounded-lg shadow-lg',
}) {
  const formattedDescription = description
    .split('\n\n')
    .map((paragraph, index) => (
      <p key={index} className={descriptionClassName}>
        {paragraph}
        {index < description.split('\n\n').length - 1 && <br />}
      </p>
    ));

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
            {images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt}
                className={imageClassName}
              />
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
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  imageClassName: PropTypes.string,
};

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
  images: [
    {
      url: 'https://placehold.co/600x400',
      alt: 'Project screenshot 1',
    },
    {
      url: 'https://placehold.co/600x400',
      alt: 'Project screenshot 2',
    },
    {
      url: 'https://placehold.co/600x400',
      alt: 'Project screenshot 3',
    },
  ],
  imageClassName: 'w-full h-auto rounded-lg shadow-lg',
};
