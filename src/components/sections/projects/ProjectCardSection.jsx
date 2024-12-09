import ProjectCard from '../../ui/common/ProjectCard';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';

// Import images statically
import projectOneImg from '../../../assets/images/project/main-project-one@2x.webp';
import projectTwoImg from '../../../assets/images/project/main-project-two@2x.webp';
import projectThreeImg from '../../../assets/images/project/main-project-three@2x.webp';
import projectFourImg from '../../../assets/images/project/main-project-four@2x.webp';

/**
 * ProjectCardSection component that displays a grid of project cards
 * @returns {JSX.Element}
 */
export default function ProjectCardSection() {
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
      title: 'Productivity Dashboard',
      href: '/projects/single-project',
      description: 'An intuitive dashboard for tracking team productivity',
      image: projectFourImg,
      imageAlt: 'Productivity dashboard screenshot',
      tags: ['React', 'TypeScript', 'GraphQL'],
    },
  ];

  return (
    <Section padding='px-4 py-8 sm:px-8 md:px-16 md:py-24'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              href={project.href}
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
