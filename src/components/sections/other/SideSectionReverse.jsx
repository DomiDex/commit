import PropTypes from 'prop-types';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
import Image from '../../ui/imageComponents/Image';
import mainAboutOne from '../../../assets/images/About/main-about-one@2x.webp';
import mainAboutTwo from '../../../assets/images/About/main-about-two@2x.webp';
import { useState } from 'react';

/**
 * A flexible side section component with reversed layout
 *
 * @param {Object} props
 * @param {string} props.title - The title text
 * @param {string} props.description - The description text
 * @param {string} props.image - The image source
 * @param {string} props.imageAlt - The image alt text
 * @param {('h1'|'h2'|'h3')} [props.titleAs='h2'] - The heading level to use
 */
export default function SideSectionReverse({
  title,
  description,
  image,
  imageAlt,
  titleAs: TitleComponent = 'h2',
}) {
  const [imageError, setImageError] = useState(false);

  // Map public paths to imported images
  const imageMap = {
    '/images/About/main-about-one@2x.webp': mainAboutOne,
    '/images/About/main-about-two@2x.webp': mainAboutTwo,
  };

  const resolvedImage = imageMap[image] || image;

  return (
    <Section padding='px-4 py-8 sm:px-8 md:px-16 md:py-24'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center'>
          <div className='relative aspect-[4/3] w-full md:order-1'>
            {!imageError ? (
              <Image
                src={resolvedImage}
                alt={imageAlt}
                className='object-cover rounded-lg w-full h-full'
                loading='lazy'
                onError={() => {
                  console.error('Image failed to load:', resolvedImage);
                  setImageError(true);
                }}
              />
            ) : (
              <div className='absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg'>
                <span className='text-gray-400'>
                  Image not available
                  {resolvedImage && `: ${resolvedImage.substring(0, 50)}...`}
                </span>
              </div>
            )}
          </div>
          <div className='space-y-4 md:space-y-8 md:order-2'>
            <TitleComponent className='text-2xl md:text-4xl font-bold'>
              {title}
            </TitleComponent>
            <p className='text-base md:text-lg'>{description}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

SideSectionReverse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  titleAs: PropTypes.oneOf(['h1', 'h2', 'h3']),
};
