import SideSection from '../components/sections/other/SideSection';
import SideSectionReverse from '../components/sections/other/SideSectionReverse';
import ContentSectionCenter from '../components/sections/other/ContentSectionCenter';
import ImageAboutHero from '../assets/images/about/hero-about@2x.webp';
import ImageAboutTwo from '../assets/images/about/image-about-two@2x.webp';

export default function About() {
  return (
    <>
      <SideSection
        title='Who am I?'
        description={`  This project involved creating a dynamic e-commerce platform tailored to the client's specifications. Utilizing cutting-edge technologies such as React for the front end and Node.js for the back end, we ensured a seamless user experience. 
            The client required a robust system that could handle high traffic while maintaining fast load times and an intuitive interface.`}
        image={ImageAboutHero}
        imageAlt='Vision illustration'
        titleAs='h1'
      />
      <ContentSectionCenter
        text="This project involved creating a dynamic e-commerce platform tailored to the client's specifications. Utilizing cutting-edge technologies such as React for the front end and Node.js for the back end, we ensured a seamless user experience. The client required a robust system that could handle high traffic while maintaining fast load times and an intuitive interface."
        textClassName='md:text-3xl text-xl font-semibold text-slate-200'
      />
      <SideSectionReverse
        title='What I do?'
        description={`  This project involved creating a dynamic e-commerce platform tailored to the client's specifications. Utilizing cutting-edge technologies such as React for the front end and Node.js for the back end, we ensured a seamless user experience. 
            The client required a robust system that could handle high traffic while maintaining fast load times and an intuitive interface.`}
        image={ImageAboutTwo}
        imageAlt='Vision illustration'
        titleAs='h2'
      />
    </>
  );
}
