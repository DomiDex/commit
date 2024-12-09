import MainHero from '../components/sections/hero/MainHero';
import ProjectSingleDescription from '../components/sections/projects/ProjectSingleDescription';
import ProjectCardSection from '../components/sections/projects/ProjectSingleCardSection';

export default function ProjectSingle() {
  const projectImages = [
    {
      src: '/images/project/main-project-one@2x.webp',
      alt: 'Homepage screenshot',
    },
    {
      src: '/images/project/main-project-two@2x.webp',
      alt: 'Dashboard view',
    },
    {
      src: '/images/project/main-project-three@2x.webp',
      alt: 'Mobile responsive design',
    },
  ];

  return (
    <>
      <MainHero />
      <ProjectSingleDescription
        titleClassName='text-2xl md:text-4xl font-bold'
        images={projectImages}
      />
      <ProjectCardSection />
    </>
  );
}
