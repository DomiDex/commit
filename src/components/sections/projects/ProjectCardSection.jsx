import ProjectCard from '../../ui/common/ProjectCard';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
import MainProjectImage from '../../../assets/images/main-project-one@2x.webp';

export default function ProjectCardSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React and Node.js',
      image: MainProjectImage,
      imageAlt: 'E-commerce project screenshot',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work',
      image: MainProjectImage,
      imageAlt: 'Portfolio project screenshot',
      tags: ['React', 'Tailwind', 'Vite'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application',
      image: MainProjectImage,
      imageAlt: 'Task management project screenshot',
      tags: ['React', 'Redux', 'Firebase'],
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard',
      image: MainProjectImage,
      imageAlt: 'Dashboard project screenshot',
      tags: ['React', 'D3.js', 'API'],
    },
  ];

  return (
    <Section padding='px-4 py-8 sm:px-8 md:px-16 md:py-24'>
      <Container>
        <div className=' flex flex-col items-center justify-center space-y-12'>
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
  );
}
