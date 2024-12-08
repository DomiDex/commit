import Section from '../ui/section/Section';
import Container from '../ui/container/Container';
import CommitLogo from '../ui/common/CommitLogo';
import { useTheme } from '../../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <Section as='footer' padding='px-4 py-8 sm:px-8 md:px-16 md:pt-24 md:pb-4'>
      <Container>
        <div className='flex flex-col items-center justify-center space-y-12'>
          <div className='flex flex-col items-center justify-center space-y-6'>
            <CommitLogo className='w-52 h-auto' />
            <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12'>
              <a
                className='text-lg font-semibold hover:text-amber-500 transition-colors duration-300'
                href='/about'
              >
                About
              </a>
              <a
                className='text-lg font-semibold hover:text-amber-500 transition-colors duration-300'
                href='/projects'
              >
                Projects
              </a>
              <a
                className='text-lg font-semibold hover:text-amber-500 transition-colors duration-300'
                href='/contact'
              >
                Contact
              </a>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center space-y-2'>
            <div className={`w-full h-[1px] ${theme.lightBg}`}></div>
            <div className='w-full flex md:flex-row flex-col items-center justify-between space-y-2'>
              <p className='text-sm text-slate-300'>
                &copy; {new Date().getFullYear()}{' '}
                <a
                  className=' hover:text-amber-500 transition-colors duration-300'
                  href='https://www.reactory-ui.com/'
                >
                  reactory UI
                </a>
                . All rights reserved.
              </p>
              <div className='flex flex-row items-center justify-center space-x-2'>
                <a
                  className='text-sm text-slate-300 hover:text-amber-500 transition-colors duration-300'
                  href='/terms'
                >
                  Terms of Service
                </a>
                <a
                  className='text-sm text-slate-300 hover:text-amber-500 transition-colors duration-300'
                  href='/privacy'
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
