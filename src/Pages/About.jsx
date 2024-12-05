import SideSection from '../components/sections/other/SideSection';
import SideSectionReverse from '../components/sections/other/SideSectionReverse';
import ContentSectionCenter from '../components/sections/other/ContentSectionCenter';

export default function About() {
  return (
    <>
      <SideSection
        title='Who am I?'
        description={`  This project involved creating a dynamic e-commerce platform tailored to the client's specifications. Utilizing cutting-edge technologies such as React for the front end and Node.js for the back end, we ensured a seamless user experience. 
          The client required a robust system that could handle high traffic while maintaining fast load times and an intuitive interface.`}
        image='/path/to/your/image.jpg'
        imageAlt='Vision illustration'
        titleAs='h1'
      />
      <SideSectionReverse />
      <ContentSectionCenter />
    </>
  );
}
