import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';

export default function SkillSection() {
  return (
    <Section>
      <Container>
        <div className='w-9/12 mx-auto'>
          <p className='md:text-3xl text-xl font-semibold text-slate-200'>
            This project involved creating a dynamic e-commerce platform
            tailored to the client's specifications. Utilizing cutting-edge
            technologies such as React for the front end and Node.js for the
            back end, we ensured a seamless user experience. The client required
            a robust system that could handle high traffic while maintaining
            fast load times and an intuitive interface.
          </p>
        </div>
      </Container>
    </Section>
  );
}
