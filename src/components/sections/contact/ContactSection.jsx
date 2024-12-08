import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
import ContactForm from './ContactForm';
import ContactButton from '../../ui/button/ContactButton';
import Address from '../../ui/common/Address';

export default function ContactSection() {
  const contactButtons = [
    {
      href: 'mailto:contact@example.com',
      iconType: 'email',
      text: 'contact@example.com',
    },
    {
      href: 'tel:+1234567890',
      iconType: 'phone',
      text: '+1234567890',
    },
  ];

  return (
    <Section padding='px-4 py-8 sm:px-8 md:px-16 md:py-24'>
      <Container>
        <div className='w-full mx-auto flex flex-col md:flex-row items-start justify-between space-y-12 md:space-y-0 md:space-x-12'>
          <div className='w-full md:w-6/12 flex flex-col items-start justify-start space-y-4'>
            <h1 className='text-4xl font-bold'>Get in Touch</h1>
            <p className='text-lg'>
              Whether you have a question, a project in mind, or just want to
              say hello, we&apos;re all ears.
            </p>
            <div className='flex flex-col space-y-4'>
              {contactButtons.map((button, index) => (
                <ContactButton
                  key={index}
                  href={button.href}
                  iconType={button.iconType}
                  text={button.text}
                />
              ))}
            </div>
            <Address />
          </div>
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
