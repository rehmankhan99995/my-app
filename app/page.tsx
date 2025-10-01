import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div
      className="relative h-[819px] max-w-auto  py-16 px-4 sm:px-12 md:px-24 
             bg-[url('/background.png')] bg-cover bg-center overflow-hidden"
    >
      {/* --- Main Content Area --- */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1140px] mx-auto z-10 relative ">
        {/* Left Side: Text, Buttons, and Logos */}
        <div className="lg:w-1/2 text-center lg:text-left mt-17  lg:">
          <h1 className="text-[67px] md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-4">
            THE UNFAIR
            <br />
            ADVANTAGE
          </h1>
          <p className="text-[21px] font-normal md:text-xl text-gray-900 ">
            Innovative Marketing Fusion of Traditional and AI – Hybrid Approach
            for Exceptional Results
          </p>

          {/* Buttons Group */}
          <div className="flex justify-center lg:justify-start space-x-6 mt-8">
            <Button className="px-7 text-sm font-medium text-white  rounded-full bg-[#6054FF] ">
              DISCOVER MORE
            </Button>
            <Button className="px-7  text-sm font-medium rounded-full bg-[#6054FF] ">
              GET A PROPOSAL
            </Button>
          </div>

          <div className="flex mt-8 justify-center lg:justify-start items-center gap-4">
            <div>
              <Image
                src="/Semrush certified agency partner badge.png"
                alt="image"
                height={67.47}
                width={67.47}
              />
            </div>
            <div>
              <Image
                src="/metaaa.png"
                alt="image"
                height={79.38}
                width={66.59}
              />
            </div>
            <div>
              <Image
                src="/google-adsss.png"
                alt="image"
                height={79.38}
                width={66.59}
              />
            </div>
            <div>
              <Image
                src="/logo_wp.png.png"
                alt="image"
                height={79.38}
                width={66.59}
              />
            </div>
            <div>
              <Image
                src="/shopify-new.png"
                alt="image"
                height={40}
                width={40}
              />
            </div>
            <div>
              <Image
                src="/logo_wp.png.png"
                alt="image"
                height={79.38}
                width={66.59}
              />
            </div>
          </div>
        </div>

        {/* Right Side: 3D Graph Illustration */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-[350px] md:w-[450px] h-[250px] md:h-[320px] relative">
            {/* The illustration is complex. An Image component is the only way for pixel-perfection. */}
            <Image
              src="/company.png"
              alt="3D Graph Illustration of Unfair Advantage"
              height={321.13}
              width={503.89}
            />
          </div>
        </div>
      </div>

      {/* --- Curved Bottom Section --- */}
      {/* This is the hardest part to make pixel-perfect without an image or SVG.
          This CSS approximation uses a background color and a large top border radius 
          to mimic the wave shape. For absolute perfection, use an SVG or a background image. */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 transform translate-y-px 
                      bg-white rounded-t-[50%] opacity-90"
      >
        {/* You'd likely need to adjust the percentage radius to match your image exactly */}
      </div>

      {/* Another option for the curve is to use a slightly higher z-index and border radius on the container
       *below* this section and rely on overflow hidden on this section. */}
    </div>
  );
}
