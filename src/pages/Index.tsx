import React from 'react';
import Hero from '@/components/Hero';
import BackgroundImages from '@/components/BackgroundImages';
import ContentImages from '@/components/ContentImages';
import BottomSection from '@/components/BottomSection';

const Index: React.FC = () => {
  return (
    <main className="max-w-[1422px] relative w-full h-[1015px] overflow-hidden mx-auto my-0 max-md:max-w-[991px] max-md:h-auto max-md:p-5 max-sm:max-w-screen-sm">
      <BackgroundImages />
      <Hero />
      <ContentImages />
      <BottomSection />
    </main>
  );
};

export default Index;
