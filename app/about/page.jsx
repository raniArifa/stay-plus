import BlogArea from "@/components/BlogArea";
import Company from "@/components/Company";
import Counter from "@/components/Counter";
import AboutHero from "@/components/AboutHero";
import Team from "@/components/Team";

export const metadata = {
  title: "About Us | RealStatic",
};

const About = () => {
  return (
    <>
      <AboutHero />
      <Counter className="bg-transparent" />
      <Company />
      <Team />
      <BlogArea />
    </>
  );
};

export default About;
