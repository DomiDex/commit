import PropTypes from 'prop-types';
import Section from '../ui/section/Section';
import Container from '../ui/container/Container';
import CallToActionCard from '../sections/other/CallToActionCard';

/**
 * A call-to-action section component that appears at the bottom of pages
 *
 * @param {Object} props
 * @param {string} [props.title="Let's Build Something Amazing Together"] - The CTA title
 * @param {string} [props.description="Ready to transform your ideas into reality? Get in touch and let's start creating your next successful project."] - The CTA description
 * @param {string} [props.buttonText="Let's Talk"] - The button text
 * @param {string} [props.buttonHref="/contact"] - The button link
 */
export default function Cta({
  title = "Let's Build Something Amazing Together",
  description = `Ready to transform your ideas into reality? Get in touch and let's start creating your next successful project.`,
  buttonText = "Let's Talk",
  buttonHref = '/contact',
}) {
  return (
    <Section padding='px-4 py-8 sm:px-8 md:px-16 md:py-24'>
      <Container>
        <CallToActionCard
          title={title}
          description={description}
          buttonText={buttonText}
          buttonHref={buttonHref}
          className='bg-slate-900 rounded-lg shadow-xl'
        />
      </Container>
    </Section>
  );
}

Cta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
};
