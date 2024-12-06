import PropTypes from 'prop-types';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';

/**
 * A flexible side section component with customizable content and reversed layout
 *
 * @param {Object} props
 * @param {string} props.title - The title text
 * @param {string} props.description - The description text
 * @param {string} props.image - The image URL
 * @param {string} props.imageAlt - The image alt text
 * @param {('h1'|'h2'|'h3')} [props.titleAs='h2'] - The heading level to use
 * @param {string} [props.titleClassName='text-4xl font-semibold'] - Custom title classes
 * @param {string} [props.descriptionClassName='text-lg'] - Custom description classes
 * @param {string} [props.imageClassName='rounded-lg shadow-lg aspect-auto']
 * - Custom image classes
 */
export default function SideSectionReverse({
  title = 'About Our Mission',
  description = 'We are dedicated to creating exceptional web experiences that combine cutting-edge technology with intuitive design. Our mission is to help businesses thrive in the digital world.',
  image = '/images/about/main-about-one@2x.webp',
  imageAlt = 'About our mission',
  titleAs: TitleComponent = 'h2',
  titleClassName = 'text-4xl font-semibold',
  descriptionClassName = 'text-lg',
  imageClassName = 'rounded-lg shadow-lg aspect-auto',
}) {
  return (
    <Section padding='px-4 py-8 sm:px-8 md:px-16 md:py-24'>
      <Container>
        <div className='flex flex-col md:flex-row-reverse items-center justify-between space-y-8 md:space-y-0 md:space-x-12 md:space-x-reverse'>
          <div className='flex flex-col space-y-4 w-full md:w-1/2'>
            <TitleComponent className={titleClassName}>{title}</TitleComponent>
            <p className={descriptionClassName}>{description}</p>
          </div>
          <div className='w-full md:w-1/2'>
            <img src={image} alt={imageAlt} className={imageClassName} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

SideSectionReverse.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  titleAs: PropTypes.oneOf(['h1', 'h2', 'h3']),
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
  imageClassName: PropTypes.string,
};
