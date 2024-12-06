import MainHero from '../components/sections/hero/MainHero';
import ProjectSingleDescription from '../components/sections/projects/ProjectSingleDescription';
import placeholderImage from '@assets/images/placeholder.webp';
import ProjectCardSection from '../components/sections/projects/ProjectSingleCardSection';

export default function ProjectSingle() {
  return (
    <>
      <MainHero />
      <ProjectSingleDescription
        titleClassName='text-2xl md:text-4xl font-bold '
        images={[
          {
            url: placeholderImage,
            alt: 'Homepage screenshot',
          },
          {
            url: placeholderImage,
            alt: 'Dashboard view',
          },
          {
            url: placeholderImage,
            alt: 'Mobile responsive design',
          },
        ]}
      />
      <ProjectCardSection />
    </>
  );
}
