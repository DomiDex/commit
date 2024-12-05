import PropTypes from 'prop-types';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';

/**
 * A centered content section component with customizable text
 *
 * @param {Object} props
 * @param {string} [props.text=''] - The text content to display
 * @param {string} [props.textClassName='md:text-3xl text-xl font-semibold'] - Custom text classes
 */
export default function ContentSectionCenter({
  text = "This project involved creating a dynamic e-commerce platform tailored to the client's specifications. Utilizing cutting-edge technologies such as React for the front end and Node.js for the back end, we ensured a seamless user experience. The client required a robust system that could handle high traffic while maintaining fast load times and an intuitive interface.",
  textClassName = 'md:text-3xl text-xl font-semibold',
}) {
  return (
    <Section>
      <Container>
        <div className='w-9/12 mx-auto'>
          <p className={textClassName}>{text}</p>
        </div>
      </Container>
    </Section>
  );
}

ContentSectionCenter.propTypes = {
  text: PropTypes.string,
  textClassName: PropTypes.string,
};
