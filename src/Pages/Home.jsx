import SideSectionReverse from '../components/sections/other/SideSectionReverse';
import HomeSideImage from '../assets/images/home/home-side-image@2x.webp';
import Section from '../components/ui/section/Section';
import Container from '../components/ui/container/Container';
import ProjectCard from '../components/ui/common/ProjectCard';
import MainProjectImage from '../assets/images/project/main-project-one@2x.webp';
import MainProjectTwoImage from '../assets/images/project/main-project-two@2x.webp';
import MainProjectThreeImage from '../assets/images/project/main-project-three@2x.webp';
import SkillSection from '../components/sections/other/SkillSection';
import TestimonialSection from '../components/sections/other/TestimonialSection';
import Cta from '../components/layout/Cta';
import HomeHero from '../components/sections/hero/HomeHero';

export default function Home() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      href: '/projects/single-project',
      description: 'A modern e-commerce solution built with React and Node.js',
      image: MainProjectImage,
      imageAlt: 'E-commerce project screenshot',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Portfolio Website',
      href: '/projects/single-project',
      description: 'A responsive portfolio website showcasing creative work',
      image: MainProjectTwoImage,
      imageAlt: 'Portfolio project screenshot',
      tags: ['React', 'Tailwind', 'Vite'],
    },
    {
      title: 'Task Management App',
      href: '/projects/single-project',
      description: 'A collaborative task management application',
      image: MainProjectThreeImage,
      imageAlt: 'Task management project screenshot',
      tags: ['React', 'Redux', 'Firebase'],
    },
  ];

  return (
    <>
      <HomeHero />
      <SideSectionReverse
        image={HomeSideImage}
        title='What I do?'
        description="This project involved creating a dynamic e-commerce platform tailored to the client's specifications. Utilizing cutting-edge technologies such as React for the front end and Node.js for the back end, we ensured a seamless user experience. The client required a robust system that could handle high traffic while maintaining fast load times and an intuitive interface."
      />
      <Section>
        <Container>
          <div className='flex flex-col items-center justify-center space-y-12'>
            <div className='flex flex-col items-center justify-center space-y-4'>
              <h2 className='text-2xl md:text-4xl font-bold text-center'>
                Explore My Recent Projects
              </h2>
              <p className='text-center'>
                We have worked with a variety of clients, from startups to
                established businesses.
              </p>
            </div>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                imageAlt={project.imageAlt}
                tags={project.tags}
              />
            ))}
          </div>
        </Container>
      </Section>
      <SkillSection />
      <TestimonialSection />
      <Cta />
    </>
  );
}
