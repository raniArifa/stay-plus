
import Counter from "@/components/Counter";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import WorkArea from "@/components/WorkArea";


 export const metadata = {
  title: "StayPlus -Your Co-Host Partner",
  description: "Increase Your Income with Professional Co-hosting",
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
