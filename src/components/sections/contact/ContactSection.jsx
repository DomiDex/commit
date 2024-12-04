import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
export default function ContactSection() {
  return (
    <Section padding='px-4 py-8 sm:px-8 md:px-16 md:py-24'>
      <Container>
        <div className='w-full md:w-10/12 mx-auto flex flex-col items-center justify-center space-y-12'>
          <h1>Contact</h1>
        </div>
      </Container>
    </Section>
  );
}
