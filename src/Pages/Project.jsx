import MainHero from '../components/sections/hero/MainHero';
import ProjectCardSection from '../components/sections/projects/ProjectCardSection';

export default function Project() {
  return (
    <>
      <MainHero
        title='My Portfolio Projects'
        description='Explore my collection of web development projects showcasing various technologies and solutions.'
      />
      <ProjectCardSection />
    </>
  );
}
