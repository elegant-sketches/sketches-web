import Layout from '../components/Layout';
import { Banner } from '@/components/Pages/Home/Banner/index';
import { Projects } from '@/components/Pages/Home/Projects';
import { Skills } from '@/components/Pages/Home/Skills';
import { Testimonil } from '@/components/Pages/Home/Testimonil';
import { Education } from '@/components/Pages/Home/Education';
import { Contact } from '@/components/Pages/Home/Contact';
import { Carousel } from '@/components/Pages/Home/Carousel';
import HomeData from '../constants/Home.json';
import BannerImg from '../accets/bannerImg.jpg';

const IndexPage = () => {
  return (
    <Layout title='Home | Next.js + TypeScript Example'>
      <div>
        <div className='bg-banner-bg w-full min-h-[22rem] h-full bg-no-repeat bg-cover opacity-80  flex items-center'>
          <Banner />
        </div>

        <Projects />
        <Skills />
        <Testimonil />
        <Education />
        <Contact />
      </div>
    </Layout>
  );
};

export default IndexPage;
