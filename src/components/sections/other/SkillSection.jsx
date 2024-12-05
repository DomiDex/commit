import Section from '../../ui/section/Section';
import Container from '../../ui/container/Container';
import Grid from '../../ui/grid/Grid';

export default function SkillSection() {
  return (
    <Section>
      <Container>
        <div className='w-9/12 mx-auto'>
          <h2 className='md:text-3xl text-xl font-semibold text-center'>
            Unlock Your Potential with Our
            <br className='hidden md:block' />
            Comprehensive Fullstack Development Stack
          </h2>
          <Grid cols='grid-cols-2' mdCols='md:grid-cols-3' gap='gap-6'>
            {/* Grid items */}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}
