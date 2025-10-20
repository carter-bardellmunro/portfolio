import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { SiTypescript } from 'react-icons/si';
import resonate from '@/public/resonate.png';

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
      'I worked as a Full Stack Enginner—mainly on frontend projects—for 8 months. I worked across two projects with our first stack being React / TypeScript / Next.js / Chakra UI and the next being React Native / TypeScript. ',
    icon: React.createElement(FaReact),
    date: 'Jan 2022 - Aug 2022',
  },
  {
    title: 'Full Stack Developer @ Maker.Tech',
    location: 'Auckland, NZ',
    description:
      'I currently work as a full stack developer across a range of different projects for different clients. Our main tech stach is TypeScript / React / Next.js / Contentful / GraphQL / AWS',
    icon: React.createElement(SiTypescript),
    date: 'Oct 2023 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'Resonate',
    description:
      'My final group project at my bootcamp. Inspired by dating apps, users were matched based on their music interests and a successful match would allow users to chat.',
    tags: ['React', 'Redux', 'SQLite', 'Sass', 'Knex.js', 'Express.js'],
    imageUrl: resonate,
  },
] as const;

export const skillsData = [
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'GraphQL',
  'Vercel',
  'Gatsby',
  'Contentful',
  'Storybook.js',
  'JavaScript',
  'HTML',
  'CSS',
  'SASS',
  'Tailwind',
  'Chakra UI',
  'AWS',
  'GCP',
  'Algolia',
  'Redux',
  'Express',
  'REST APIs',
  'Insomnia/Postman',
  'SQLite',
  'MySQL',
  'Git',
  'Github',
  'Framer Motion',
  'Jira',
  'Agile',
] as const;
