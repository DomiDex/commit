import MainHero from '../components/sections/hero/MainHero';
import ProjectSingleDescription from '../components/sections/projects/ProjectSingleDescription';
import projectOne from '../assets/images/project-one@2x.webp';
import projectTwo from '../assets/images/project-two@2x.webp';
import projectThree from '../assets/images/project-three@2x.webp';

export default function ProjectSingle() {
  return (
    <>
      <MainHero />
      <ProjectSingleDescription
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
    </>
  );
}
