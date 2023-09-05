import React from 'react';

type SectionHeaderProps = {
  text: string
}

const SectionHeader = ({ text }: SectionHeaderProps) => {
  return <h2 className="text-3xl font-medium capitalize mb-8 text-center">{text}</h2>;
};

export default SectionHeader;
