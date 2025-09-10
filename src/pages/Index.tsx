import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FeatureSection } from '@/components/FeatureSection';
import { FeatureCard } from '@/components/FeatureCard';
import { CallToAction } from '@/components/CallToAction';

const Index = () => {
  const handleActivateClick = () => {
    console.log('Activate now clicked!');
    // Add your activation logic here
  };

  const eyeOffIcon = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 56px; height: 56px"> <path d="M10.9831 7.68234C10.543 7.2573 9.95358 7.02212 9.34179 7.02743C8.72999 7.03275 8.14476 7.27814 7.71215 7.71076C7.27953 8.14338 7.03413 8.72861 7.02882 9.3404C7.0235 9.95219 7.25869 10.5416 7.68372 10.9817L13.3397 16.6377C10.0031 19.1483 7.09106 22.597 4.91406 26.9557C4.75222 27.2795 4.66797 27.6366 4.66797 27.9987C4.66797 28.3607 4.75222 28.7178 4.91406 29.0417C9.94939 39.1147 18.8907 44.332 28.0001 44.332C31.6284 44.332 35.2334 43.5037 38.5701 41.8703L45.0171 48.315C45.4571 48.74 46.0465 48.9752 46.6583 48.9699C47.2701 48.9646 47.8553 48.7192 48.288 48.2866C48.7206 47.854 48.966 47.2687 48.9713 46.6569C48.9766 46.0451 48.7414 45.4557 48.3164 45.0157L10.9831 7.68234ZM35.0327 38.3307C32.7461 39.2243 30.3661 39.6653 28.0001 39.6653C21.0724 39.6653 13.9954 35.8853 9.63672 27.9987C11.5431 24.5477 13.9721 21.8853 16.6787 19.979L21.6814 24.9817C21.0563 26.2882 20.8518 27.7565 21.0962 29.1842C21.3406 30.6118 22.0219 31.9285 23.0461 32.9526C24.0703 33.9768 25.3869 34.6581 26.8146 34.9025C28.2422 35.1469 29.7105 34.9425 31.0171 34.3173L35.0327 38.3307ZM43.2881 32.4227C44.4151 31.1253 45.4487 29.653 46.3634 27.9987C42.0047 20.112 34.9301 16.332 28.0001 16.332C27.7387 16.332 27.4774 16.3375 27.2161 16.3483L23.0511 12.1857C24.678 11.8398 26.3367 11.6654 28.0001 11.6653C37.1071 11.6653 46.0507 16.8827 51.0861 26.9557C51.2479 27.2795 51.3321 27.6366 51.3321 27.9987C51.3321 28.3607 51.2479 28.7178 51.0861 29.0417C49.8926 31.4597 48.3821 33.7079 46.5944 35.7267L43.2881 32.4227Z" fill="#18255D" fill-opacity="0.8"></path> </svg>`;

  const downloadIcon = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 56px; height: 56px"> <path d="M46.6654 35.582C47.1295 35.582 47.5746 35.7664 47.9028 36.0946C48.231 36.4228 48.4154 36.8679 48.4154 37.332V39.6654C48.4154 41.986 47.4935 44.2116 45.8526 45.8526C44.2116 47.4935 41.986 48.4154 39.6654 48.4154H16.332C14.0114 48.4154 11.7858 47.4935 10.1448 45.8526C8.5039 44.2116 7.58203 41.986 7.58203 39.6654V37.3414C7.58203 36.8772 7.76641 36.4321 8.09459 36.1039C8.42278 35.7757 8.8679 35.5914 9.33203 35.5914C9.79616 35.5914 10.2413 35.7757 10.5695 36.1039C10.8977 36.4321 11.082 36.8772 11.082 37.3414V39.6654C11.082 41.0578 11.6352 42.3931 12.6197 43.3777C13.6043 44.3622 14.9396 44.9154 16.332 44.9154H39.6654C41.0578 44.9154 42.3931 44.3622 43.3777 43.3777C44.3622 42.3931 44.9154 41.0578 44.9154 39.6654V37.332C44.9154 36.8679 45.0997 36.4228 45.4279 36.0946C45.7561 35.7664 46.2012 35.582 46.6654 35.582Z" fill="#18255D" fill-opacity="0.8"></path> <path d="M29.7491 10.5C29.7491 10.0359 29.5647 9.59075 29.2365 9.26256C28.9084 8.93437 28.4632 8.75 27.9991 8.75C27.535 8.75 27.0899 8.93437 26.7617 9.26256C26.4335 9.59075 26.2491 10.0359 26.2491 10.5V26.7633H18.5958C18.2681 27.0915 18.084 27.5362 18.084 28C18.084 28.4638 18.2681 28.9085 18.5958 29.2367L26.7624 37.4033C27.0906 37.7311 27.5354 37.9151 27.9991 37.9151C28.4629 37.9151 28.9077 37.7311 29.2358 37.4033L37.4024 29.2367C37.7302 28.9085 37.9142 28.4638 37.9142 28C37.9142 27.5362 37.7302 27.0915 37.4024 26.7633H29.7491V10.5Z" fill="#18255D" fill-opacity="0.8"></path> </svg>`;

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden bg-[#f8f9fa]">
      <main className="w-full max-w-[1440px] relative min-h-[1429px] mx-auto my-0 max-sm:min-h-[2000px]">
        <div className="w-[94.4%] h-[845px] absolute rounded-[80px] left-[2.8%] top-[570px] max-md:rounded-[60px] max-sm:w-[90%] max-sm:h-[600px] max-sm:rounded-[40px] max-sm:left-[5%] max-sm:top-[1350px]" />
        
        <HeroSection 
          title="ASA BRAND DEFENDER"
          description="We created a smart tool that prevents competitors from stealing your branded traffic."
        />
        
        <FeatureSection 
          title="It automatically finds all search queries used to look for you:"
          features={["brand name", "typos", "key phrases", "transliterations"]}
          imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/e0a5146ac2779ebc940a4056371e336dc6513c3f?width=624"
          imageAlt="ASA Brand Defender mobile app interface"
        />
        
        <FeatureCard 
          icon={eyeOffIcon}
          title="App Filtering"
          description="When your app (or multiple apps) appear in the ASA search results, we simply ignore it."
          position="left"
        />
        
        <FeatureCard 
          icon={downloadIcon}
          title="Competitor Targeting"
          description="When a competitor's app appears — we trigger an install of that app."
          position="right"
        />
        
        <CallToAction 
          text="Activate now"
          onClick={handleActivateClick}
        />
      </main>
    </div>
  );
};

export default Index;
