
import Counter from "@/components/Counter";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import WorkArea from "@/components/WorkArea";

 export const metadata = {
  title: "StayPlus",
  description: "Your Co-Host Partner",
};

export default function Home() {

  return (
    <>
      <Hero />
      <Counter />
      <Feature />
      <WorkArea />
    </>
  );
}
