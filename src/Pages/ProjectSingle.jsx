import MainHero from '../components/sections/hero/MainHero';
import ProjectSingleDescription from '../components/sections/projects/ProjectSingleDescription';
import { PLACEHOLDER_IMAGE } from '../constants/images';
import ProjectCardSection from '../components/sections/projects/ProjectSingleCardSection';

export default function ProjectSingle() {
  return (
    <>
      <MainHero />
      <ProjectSingleDescription
        titleClassName='text-2xl md:text-4xl font-bold '
        images={[
          {
            url: PLACEHOLDER_IMAGE,
            alt: 'Homepage screenshot',
          },
          {
            url: PLACEHOLDER_IMAGE,
            alt: 'Dashboard view',
          },
          {
            url: PLACEHOLDER_IMAGE,
            alt: 'Mobile responsive design',
          },
        ]}
      />
      <ProjectCardSection />
    </>
  );
}
