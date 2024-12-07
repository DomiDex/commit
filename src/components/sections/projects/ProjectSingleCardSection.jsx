import ProjectCard from '../../ui/common/ProjectCard';
import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';

export default function ProjectCardSection() {
  return (
    <Section padding='px-4 py-8 sm:px-8 md:px-16 md:py-24'>
      <Container>
        <div className='flex flex-col items-center justify-center space-y-12'>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <h2 className='text-2xl md:text-4xl font-bold text-center'>
              Explore My Recent Projects
            </h2>
            <p className='text-center '>
              We have worked with a variety of clients, from startups to
              established businesses.
            </p>
          </div>
          <ProjectCard
            title='My Amazing Project'
            projectLink='/project/single-project'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
            image='src/assets/images/project/main-project-one@2x.webp'
            imageAlt='Project screenshot'
            tags={['React', 'Node.js', 'MongoDB']}
          />
        </div>
      </Container>
    </Section>
  );
}
