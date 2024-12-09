import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
import MainButton from '../../ui/button/MainButton';
import heroImage from '../../../assets/images/home/home-hero@2x.webp';

export default function HomeHero() {
  return (
    <Section padding='px-4 pt-24 pb-8  md:pl-16 md:pr-0 md:pb-24 md:pt-0'>
      <Container className='pr-0'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0'>
          <div className=' w-full md:w-5/12 flex flex-col items-start justify-start space-y-4'>
            <h1 className='text-4xl font-semibold'>
              Crafting Innovative Solutions with Full-Stack Expertise
            </h1>
            <p className='text-lg'>
              As a versatile full-stack developer, I excel in both front-end and
              back-end technologies, creating seamless user experiences. My
              passion lies in transforming ideas into functional applications
              that drive results.
            </p>
            <div className='flex flex-row items-center justify-center space-x-2'>
              <MainButton text='Explore My Work' href='/projects' />
              <MainButton text='Contact Me' href='/contact' variant='outline' />
            </div>
          </div>
          <img
            className='w-full md:w-6/12 rounded-tl-xl rounded-bl-xl'
            src={heroImage}
            alt='Hero Image'
          />
        </div>
      </Container>
    </Section>
  );
}
