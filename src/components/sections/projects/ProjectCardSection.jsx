import ProjectCard from '../../ui/common/ProjectCard';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';

export default function ProjectCardSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with React and Node.js',
      image: 'src/assets/images/project/main-project-one@2x.webp',
      imageAlt: 'E-commerce project screenshot',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work',
      image: 'src/assets/images/project/main-project-two@2x.webp',
      imageAlt: 'Portfolio project screenshot',
      tags: ['React', 'Tailwind', 'Vite'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application',
      image: 'src/assets/images/project/main-project-three@2x.webp',
      imageAlt: 'Task management project screenshot',
      tags: ['React', 'Redux', 'Firebase'],
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard',
      image: 'src/assets/images/project/main-project-four@2x.webp',
      imageAlt: 'Dashboard project screenshot',
      tags: ['React', 'D3.js', 'API'],
    },
  ];

  return (
    <Section padding='px-4 py-8 sm:px-8 md:px-16 md:py-24'>
      <Container>
        <div className='flex flex-col items-center justify-center space-y-12'>
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
