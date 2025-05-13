import { Day } from "@/components/Day";
import { Night } from "@/components/Night";

export default function Home() {
  return (
    <div className="flex justify-center pt-20 gap-10 ">
      <Day />
      <Night />
      
    </div>
  );
}
