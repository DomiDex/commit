import MainHero from '../components/sections/hero/MainHero';
import ProjectSingleDescription from '../components/sections/projects/ProjectSingleDescription';

import ProjectCardSection from '../components/sections/projects/ProjectSingleCardSection';
import projectOneImage from '@assets/images/project/project-one@2x.webp';
import projectTwoImage from '@assets/images/project/project-two@2x.webp';
import projectThreeImage from '@assets/images/project/project-three@2x.webp';

export default function ProjectSingle() {
  return (
    <>
      <MainHero />
      <ProjectSingleDescription
        titleClassName='text-2xl md:text-4xl font-bold '
        images={[
          {
            url: projectOneImage,
            alt: 'Homepage screenshot',
          },
          {
            url: projectTwoImage,
            alt: 'Dashboard view',
          },
          {
            url: projectThreeImage,
            alt: 'Mobile responsive design',
          },
        ]}
      />
      <ProjectCardSection />
    </>
  );
}
