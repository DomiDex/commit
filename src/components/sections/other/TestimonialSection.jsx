import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
import TestimonialCard from '../../ui/common/TestimonialCard';
import testimonialStar from '../../../assets/svg/testimonial/Stars.svg';
import testimonialImage from '../../../assets/images/testimonial/test-profile.webp';
import testimonialImage2 from '../../../assets/images/testimonial/testi-profile-01.webp';

export default function TestimonialSection() {
  const testimonials = [
    {
      starIcon: testimonialStar,
      quote:
        'Working with this developer was an absolute pleasure. Their technical expertise and attention to detail resulted in a product that exceeded our expectations.',
      profileImage: testimonialImage,
      authorName: 'Jane Smith',
      authorTitle: 'CTO, Tech Corp',
    },
    {
      starIcon: testimonialStar,
      quote:
        'Exceptional problem-solving skills and a great communicator. Delivered our project on time and with outstanding quality. Highly recommended!',
      profileImage: testimonialImage2,
      authorName: 'John Doe',
      authorTitle: 'Founder, Digital Solutions',
    },
  ];

  return (
    <Section>
      <Container>
        <div className='flex flex-col space-y-12'>
          <div className='flex flex-col space-y-4'>
            <h2 className='text-4xl font-bold'>Customer testimonials</h2>
            <p className='mt-4'>
              Here are some testimonials from my clients and colleagues.{' '}
              <br className='hidden md:block' /> They highlight my skills and
              the quality of my work.
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                starIcon={testimonial.starIcon}
                quote={testimonial.quote}
                profileImage={testimonial.profileImage}
                authorName={testimonial.authorName}
                authorTitle={testimonial.authorTitle}
                className=' p-6 rounded-lg'
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
