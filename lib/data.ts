import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Dev Academy Aotearoa',
    location: 'Auckland, NZ',
    description:
      'A fifteen-week course designed to teach students industry skills while mirroring working environments. I learnt a combination of technical and human skills, providing me with a great understanding of how to be a successful developer in the real world, both as a professional and an empathetic human. ',
    icon: React.createElement(LuGraduationCap),
    date: 'Apr 2021 - Jul 2021',
  },
  {
    title: 'Frontend Developer @ PHX Consulting',
    location: 'Remote, NZ',
    description:
      'I worked as a freelance Frontend Developer for 3 months with developers across two timezones and external stakeholders. Our stack was React / TypeScript / Next.js / Chakra UI.',
    icon: React.createElement(CgWorkAlt),
    date: 'Oct 2021 - Dec 2021',
  },
  {
    title: 'Full Stack Engineer @ Easy Crypto',
    location: 'Remote, NZ',
    description:
      "I worked as a Full Stack Enginner—mainly on frontend porjects—for 8 months. I worked across two projects with our first stack being React / TypeScript / Next.js / Chakra UI and the next being React Native / TypeScript. ",
    icon: React.createElement(FaReact),
    date: 'Jan 2022 - Aug 2022',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'Git',
  'Chakra UI',
  'Tailwind',
  'Redux',
  'Express',
  'REST APIs',
  'SQLite',
  'Storybook.js',
  'Framer Motion',
  'Jira',
  'Agile',
] as const;
