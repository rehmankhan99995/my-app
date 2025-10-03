import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <section
        className="relative py-40 px-4 sm:px-12 md:px-40
               bg-[url('/background.png')] bg-no-repeat bg-cover bg-center overflow-hidden"
      >
        {/* --- Main Content Area --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1140px] mx-auto z-10 relative pb-24">
          {/* Left Side: Text, Buttons, and Logos */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="font-roboto text-[67px] md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-4">
              ABOUT US
            </h1>
            <p className="text-[21px] font-medium md:text-xl text-gray-900">
              Integrity. Results. Optimism
            </p>
          </div>

          {/* Right Side: 3D Graph Illustration */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className=" md:w-[450px]  md:h-[320px] relative">
              <Image
                src="/Buildings.png"
                alt="3D Graph Illustration of Unfair Advantage"
                height={283.33}
                width={593.06}
              />
            </div>
          </div>
        </div>

        {/* Extra Content Below */}
        {/* <div className="mt-12 flex flex-col items-start">
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
       <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
      <h1>gggggg</h1>
    </div> */}
      </section>
      <div className="flex justify-end px-4">
        <Image src="/whatsapp.png" alt="image" height={44} width={44} />
      </div>
    
      <h2 className="flex flex-col items-center text-[36px] font-roboto font-semibold">
        About ROSA eSolutions
        <span className="w-10 h-[3px] bg-[#6054FF] rounded-md"></span>
      </h2>

      <section className="relative bg-white py-16 px-4 sm:px-12 md:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration */}
          <div className="flex justify-center">
            <Image
              src="/office.png"
              alt="Team working illustration"
              width={528}
              height={326}
              className="object-contain"
              priority
            />
          </div>

          {/* Right: Text Content */}
          <div>
            <p className="text-gray-900 text-[19px] font-normal leading-relaxed">
              ROSA eSolutions is a leading digital marketing company in<br/> Dubai
              that provides a comprehensive suite of cross-platform digital
              marketing services designed to maximize brand performance. Our
              diverse, growth-focused digital marketing solutions portfolio
              includes capabilities such as mobile application development,
              videography, and other{" "} 
              <a
                href="#"
                className="text-[#337AB7] hover:underline font-medium"
              >
               {" "} strategic offerings
              </a>{" "}
              tailored to any organization’s unique needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
