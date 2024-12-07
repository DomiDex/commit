import ProjectCard from '../../ui/common/ProjectCard';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
import projectFive from '../../../assets/images/project/project-small-two@2x.webp';
import projectSix from '../../../assets/images/project/project-small-three@2x.webp';
import projectFourAlt from '../../../assets/images/project/project-small-four@2x.webp';
import projectFour from '../../../assets/images/project/project-small-one@2x.webp';

export default function ProjectCardSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      href: '/projects/single-project',
      description: 'A modern e-commerce solution built with React and Node.js',
      image: projectFour,
      imageAlt: 'E-commerce project screenshot',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Portfolio Website',
      href: '/projects/single-project',
      description: 'A responsive portfolio website showcasing creative work',
      image: projectFive,
      imageAlt: 'Portfolio project screenshot',
      tags: ['React', 'Tailwind', 'Vite'],
    },
    {
      title: 'Task Management App',
      href: '/projects/single-project',
      description: 'A collaborative task management application',
      image: projectSix,
      imageAlt: 'Task management project screenshot',
      tags: ['React', 'Redux', 'Firebase'],
    },
    {
      title: 'Social Media Dashboard',
      href: '/projects/single-project',
      description:
        'A comprehensive analytics dashboard for social media management',
      image: projectFourAlt,
      imageAlt: 'Dashboard project screenshot',
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
