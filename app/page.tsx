
import Hero from "@/components/Hero";
import MotionContainer from "@/components/MotionContainer";
import Newest from "@/components/Newest";

export const dynamic = 'force-dynamic'
export default function Home() {
  
  return (
  <>
  <MotionContainer >
  <Hero/>
    <Newest/>
  </MotionContainer>
    
   </>
  );
}
