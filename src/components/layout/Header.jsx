import { useState } from 'react';
import Section from '../ui/section/Section';
import Container from '../ui/container/Container';
import MainButton from '../ui/button/MainButton';
import DropdownColor from '../ui/dropdown/DropdownColor';
import { useTheme } from '../../context/ThemeContext';
import CommitLogo from '../ui/common/CommitLogo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <Section
        as='header'
        padding='px-4 py-4'
        className='fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-80'
        bgColor={theme.background}
      >
        <Container className='bg-transparent'>
          <div className='flex items-center justify-between'>
            <a href='/'>
              <CommitLogo />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden p-2 text-slate-50 hover:text-amber-500'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isOpen ? (
                  <path d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center justify-center space-x-8'>
              <ul className='flex items-center justify-center space-x-4'>
                <li>
                  <a
                    className='text-lg font-semibold hover:text-amber-500 transition-colors duration-300'
                    href='/'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className='text-lg font-semibold hover:text-amber-500 transition-colors duration-300'
                    href='/projects'
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className='text-lg font-semibold hover:text-amber-500 transition-colors duration-300'
                    href='/about'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className='text-lg font-semibold hover:text-amber-500 transition-colors duration-300'
                    href='/contact'
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <DropdownColor />
              <MainButton href='https://calendly.com/' text='Schedule a call' />
            </nav>
          </div>
        </Container>
      </Section>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 ${theme.background} bg-opacity-50 backdrop-blur-sm z-40 md:hidden`}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 ${
          theme.background
        } bg-opacity-80 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className='p-6 space-y-8'>
          <div className='flex justify-end'>
            <button
              onClick={() => setIsOpen(false)}
              className='text-slate-50 hover:text-amber-500'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <nav className='flex flex-col space-y-4'>
            <a
              className='text-lg font-semibold hover:text-amber-500 transition-colors duration-300'
              href='/'
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              className='text-lg font-semibold hover:text-amber-500 transition-colors duration-300'
              href='/about'
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              className='text-lg font-semibold hover:text-amber-500 transition-colors duration-300'
              href='/contact'
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <DropdownColor />
            <MainButton href='https://calendly.com/' text='Schedule a call' />
          </nav>
        </div>
      </div>
    </>
  );
}
