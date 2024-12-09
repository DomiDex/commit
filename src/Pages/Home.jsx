import Section from '../components/ui/section/Section';
import Container from '../components/ui/container/Container';
import ProjectCard from '../components/ui/common/ProjectCard';
import SkillSection from '../components/sections/other/SkillSection';
import TestimonialSection from '../components/sections/other/TestimonialSection';
import Cta from '../components/layout/Cta';
import HomeHero from '../components/sections/hero/HomeHero';
import SideSection from '../components/sections/other/SideSection';

// Import images
import projectOneImg from '../assets/images/project/main-project-one@2x.webp';
import projectTwoImg from '../assets/images/project/main-project-two@2x.webp';
import projectThreeImg from '../assets/images/project/main-project-three@2x.webp';
import imageAbout from '../assets/images/about/main-about-one@2x.webp';

export default function Home() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      href: '/projects/single-project',
      description: 'A modern e-commerce solution built with React and Node.js',
      image: projectOneImg,
      imageAlt: 'E-commerce project screenshot',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Portfolio Website',
      href: '/projects/single-project',
      description: 'A responsive portfolio website showcasing creative work',
      image: projectTwoImg,
      imageAlt: 'Portfolio project screenshot',
      tags: ['React', 'Tailwind', 'Vite'],
    },
    {
      title: 'Task Management App',
      href: '/projects/single-project',
      description: 'A collaborative task management application',
      image: projectThreeImg,
      imageAlt: 'Task management project screenshot',
      tags: ['React', 'Redux', 'Firebase'],
    },
    {
      title: 'Productivity App',
      href: '/projects/single-project',
      description: 'A collaborative productivity application',
      image: projectThreeImg,
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
        image={imageAbout}
        imageAlt='home about image'
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
                href={project.href}
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
