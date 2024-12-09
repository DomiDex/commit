import PropTypes from 'prop-types';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';

export default function MainHero({
  title = 'Your Code Partner',
  description = 'Passionate full-stack developer dedicated to crafting seamless user experiences and robust applications.',
  titleClassName = 'text-4xl font-semibold',
  descriptionClassName = 'text-lg',
}) {
  return (
    <Section padding='px-4 py-8 sm:px-8 md:px-16 md:py-24'>
      <Container>
        <div className='w-full md:w-7/12 flex flex-col space-y-4'>
          <h1 className={titleClassName}>{title}</h1>
          <p className={descriptionClassName}>{description}</p>
        </div>
      </Container>
    </Section>
  );
}

MainHero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
};
