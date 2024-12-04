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
    <Section>
      <Container>
        <h1 className={titleClassName}>{title}</h1>
        <p className={descriptionClassName}>{description}</p>
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

MainHero.defaultProps = {
  title: 'Your Code Partner',
  description:
    'Passionate full-stack developer dedicated to crafting seamless user experiences and robust applications.',
  titleClassName: 'text-4xl font-semibold',
  descriptionClassName: 'text-lg',
};
