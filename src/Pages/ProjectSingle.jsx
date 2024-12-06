import MainHero from '../components/sections/hero/MainHero';
import ProjectSingleDescription from '../components/sections/projects/ProjectSingleDescription';
import projectOne from '@assets/images/project/project-one@2x.webp';
import projectTwo from '@assets/images/project/project-two@2x.webp';
import projectThree from '@assets/images/project/project-three@2x.webp';
import ProjectCardSection from '../components/sections/projects/ProjectSingleCardSection';

export default function ProjectSingle() {
  return (
    <>
      <MainHero />
      <ProjectSingleDescription
        titleClassName='text-2xl md:text-4xl font-bold '
        images={[
          {
            url: projectOne,
            alt: 'Homepage screenshot',
          },
          {
            url: projectTwo,
            alt: 'Dashboard view',
          },
          {
            url: projectThree,
            alt: 'Mobile responsive design',
          },
        ]}
      />
      <ProjectCardSection />
    </>
  );
}
