import SideSection from '../components/sections/other/SideSection';
import SideSectionReverse from '../components/sections/other/SideSectionReverse';
import ContentSectionCenter from '../components/sections/other/ContentSectionCenter';

export default function About() {
  return (
    <>
      <SideSection
        title='Who am I?'
        description={`This project involved creating a dynamic e-commerce platform tailored to the client's specifications.`}
        image='/images/about/main-about-one@2x.webp'
        imageAlt='Vision illustration'
        titleAs='h1'
      />
      <ContentSectionCenter
        text="This project involved creating a dynamic e-commerce platform tailored to the client's specifications."
        textClassName='md:text-3xl text-xl font-semibold text-slate-200'
      />
      <SideSectionReverse
        title='What I do?'
        description={`This project involved creating a dynamic e-commerce platform tailored to the client's specifications.`}
        image='/images/about/main-about-two@2x.webp'
        imageAlt='Vision illustration'
        titleAs='h2'
      />
    </>
  );
}
