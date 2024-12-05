import Section from '../ui/section/Section';
import Container from '../ui/container/Container';
import CallToActionCard from '../sections/other/CallToActionCard';

export default function Cta() {
  return (
    <Section>
      <Container>
        <CallToActionCard
          title="Let's Build Something Amazing Together"
          description={`Ready to transform your ideas into reality? Get in touch and let's start creating your next successful project.`}
          buttonText="Let's Talk"
          buttonHref='/contact'
          className='bg-slate-900'
        />
      </Container>
    </Section>
  );
}
