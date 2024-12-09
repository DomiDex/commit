import SideSectionReverse from '../components/sections/other/SideSectionReverse';
import Section from '../components/ui/section/Section';
import Container from '../components/ui/container/Container';
import ProjectCard from '../components/ui/common/ProjectCard';
import SkillSection from '../components/sections/other/SkillSection';
import TestimonialSection from '../components/sections/other/TestimonialSection';
import Cta from '../components/layout/Cta';
import HomeHero from '../components/sections/hero/HomeHero';
import SideSection from '../components/sections/other/SideSection';

export default function Home() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      href: '/projects/single-project',
      description: 'A modern e-commerce solution built with React and Node.js',
      image: '/images/project/main-project-one@2x.webp',
      imageAlt: 'E-commerce project screenshot',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Portfolio Website',
      href: '/projects/single-project',
      description: 'A responsive portfolio website showcasing creative work',
      image: '/images/project/main-project-two@2x.webp',
      imageAlt: 'Portfolio project screenshot',
      tags: ['React', 'Tailwind', 'Vite'],
    },
    {
      title: 'Task Management App',
      href: '/projects/single-project',
      description: 'A collaborative task management application',
      image: '/images/project/main-project-three@2x.webp',
      imageAlt: 'Task management project screenshot',
      tags: ['React', 'Redux', 'Firebase'],
    },
  ];

  return (
    <>
      <HomeHero />
      <SideSection
        title='Who am I?'
        description='Your description here'
        image='/images/about/main-about-one@2x.webp'
        imageAlt='Description of image'
        titleAs='h1'
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
