import { useState, useEffect } from 'react';
import ProjectCard from '../../ui/common/ProjectCard';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';

export default function ProjectCardSection() {
  const [projects, setProjects] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamic imports for images
    const loadImages = async () => {
      try {
        const projectOne = await import(
          '../../../assets/images/project/project-one@2x.webp'
        );
        const projectTwo = await import(
          '../../../assets/images/project/project-two@2x.webp'
        );
        const projectThree = await import(
          '../../../assets/images/project/project-three@2x.webp'
        );

        setImages([
          {
            url: projectOne.default,
            alt: 'Project screenshot 1',
          },
          {
            url: projectTwo.default,
            alt: 'Project screenshot 2',
          },
          {
            url: projectThree.default,
            alt: 'Project screenshot 3',
          },
        ]);

        console.log('Loaded images:', { projectOne, projectTwo, projectThree });
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, []);

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
