import Head from 'next/head';
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import SectionTwo from "@/components/SectionTwo/SectionTwo";
import Modules from "@/components/Modules/Modules";
import Moving from "@/components/MovingBars/Moving";
import Questions from "@/components/Questions/Questions";
import Difference from "@/components/Difference/Difference";
import ZoomEffect from "@/components/ZommEffect/ZoomEffect";
import Footer from "@/components/Footer/Footer";
import Carousel from '@/components/Carousel/Carousel';


export default function Home() {
  return (
    <>
      <Head>
        <title>Vinicius Silva</title>
      </Head>
      <Header />
      <Hero />
      <SectionTwo />
      <About />
      <Difference />
      <Moving />
      <Carousel />
      <ZoomEffect />
      <Modules />
      <Questions />
      <Footer />
    </>
  );
}
