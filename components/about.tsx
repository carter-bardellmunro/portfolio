'use client';

import React from 'react';
import SectionHeader from './section-header';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeader text="About Me" />
      <p className="mb-3">
        After pursuing a career in{' '}
        <span className="font-medium">Marketing</span> for five years, I felt I
        needed a change. Knowing the parts of marketing I enjoyed and realising
        I could apply them to being a developer, I decided a career in tech was
        right for me. So, rather than going to university, I decided to enroll
        in a programming bootcamp and learn all about{' '}
        <span className="font-medium">full-stack web development</span>.{' '}
        <span className="italic"> Since completing my bootcamp</span> and
        joining the industry, I have discovered I{' '}
        <span className="underline">love</span> problem solving, working as part
        of a team, working outside my comfort zone, and pushing myself to
        continue learning. Some of my core skills are{' '}
        <span className="font-medium">
          TypeScript, React, Next.js, Node.js, and CSS
        </span>
        . I am also familiar with React Native, Storybook, GraphQL, Git, among
        others, and I am always looking to learn new technologies. I am
        currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, reading books, and listening to my records.
        I&apos;m also learning/teaching myself Spanish as I would like to be
        fluent one day.
      </p>
    </motion.section>
  );
};

export default About;
