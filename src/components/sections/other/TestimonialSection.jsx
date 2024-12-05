import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
import TestimonialCard from '../../ui/common/TestimonialCard';

export default function TestimonialSection() {
  return (
    <Section>
      <Container>
        <div>
          <h2 className='text-4xl font-bold'>Customer testimonials</h2>
          <p className='mt-4'>
            Here are some testimonials from my clients and colleagues.{' '}
            <br className='hidden md:block' /> They highlight my skills and the
            quality of my work.
          </p>
          <TestimonialCard />
        </div>
      </Container>
    </Section>
  );
}
