import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
import Grid from '../../ui/grid/Grid';
import Logo from '../../ui/common/Logo';
import reactLogo from '../../../assets/svg/logo/react.svg';
import tailwindLogo from '../../../assets/svg/logo/tailwindcss.svg';
import reduxLogo from '../../../assets/svg/logo/redux.svg';
import postgresLogo from '../../../assets/svg/logo/postgresql.svg';
import nodeLogo from '../../../assets/svg/logo/nodejs.svg';
import npmLogo from '../../../assets/svg/logo/npm.svg';
import htmlLogo from '../../../assets/svg/logo/html5.svg';
import jsLogo from '../../../assets/svg/logo/javascript.svg';
import gitLogo from '../../../assets/svg/logo/git.svg';
import expressLogo from '../../../assets/svg/logo/express.svg';
import cssLogo from '../../../assets/svg/logo/css3.svg';
import gitHubLogo from '../../../assets/svg/logo/github.svg';

export default function SkillSection() {
  const logos = [
    { src: reactLogo, alt: 'React Logo' },
    { src: tailwindLogo, alt: 'Tailwind Logo' },
    { src: reduxLogo, alt: 'Redux Logo' },
    { src: postgresLogo, alt: 'PostgreSQL Logo' },
    { src: nodeLogo, alt: 'Node.js Logo' },
    { src: npmLogo, alt: 'npm Logo' },
    { src: htmlLogo, alt: 'HTML Logo' },
    { src: jsLogo, alt: 'JavaScript Logo' },
    { src: gitLogo, alt: 'Git Logo' },
    { src: expressLogo, alt: 'Express Logo' },
    { src: cssLogo, alt: 'CSS Logo' },
    { src: gitHubLogo, alt: 'GitHub Logo' },
  ];

  return (
    <Section>
      <Container>
        <div className='w-9/12 mx-auto'>
          <h2 className='md:text-3xl text-xl font-semibold text-center'>
            Unlock Your Potential with My
            <br className='hidden md:block' />
            Fullstack Development Stack
          </h2>
          <Grid
            className='w-8/12 mx-auto mt-12'
            cols='grid-cols-2'
            lgCols='lg:grid-cols-3'
            mdCols='md:grid-cols-4'
            gap='gap-6'
          >
            {logos.map((logo, index) => (
              <Logo
                key={index}
                src={logo.src}
                alt={logo.alt}
                className='w-24 h-24'
              />
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}
