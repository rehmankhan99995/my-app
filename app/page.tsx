import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ---------------- Section 1: Hero ---------------- */}
      <section
        className="relative py-40 px-4 sm:px-12 md:px-40
               bg-[url('/background.png')] bg-no-repeat bg-cover bg-center overflow-hidden"
      >
        {/* --- Main Content Area --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1140px] mx-auto z-10 relative pb-24">
          {/* Left Side: Text, Buttons, and Logos */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="font-roboto text-[67px] md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-4">
              THE UNFAIR
              <br />
              ADVANTAGE
            </h1>
            <p className="text-[21px] font-normal md:text-xl text-gray-900">
              Innovative Marketing Fusion of Traditional and AI – Hybrid
              Approach for Exceptional Results
            </p>

            {/* Buttons Group */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <Button className="px-7 text-sm font-medium text-white rounded-full bg-[#6054FF]">
                DISCOVER MORE
              </Button>
              <Button className="px-7 text-sm font-medium rounded-full bg-[#6054FF]">
                GET A PROPOSAL
              </Button>
            </div>

            {/* Partner Logos */}
            <div className="flex mt-8 justify-center lg:justify-start items-center gap-4">
              <Image
                src="/Semrush certified agency partner badge.png"
                alt="Semrush"
                height={67.47}
                width={67.47}
              />
              <Image
                src="/metaaa.png"
                alt="Meta"
                height={79.38}
                width={66.59}
              />
              <Image
                src="/google-adsss.png"
                alt="Google Ads"
                height={79.38}
                width={66.59}
              />
              <Image
                src="/logo_wp.png.png"
                alt="WordPress"
                height={66}
                width={80.59}
              />
              <Image
                src="/shopify-new.png"
                alt="Shopify"
                height={110}
                width={140}
              />
              <div className="mt-5">
                <Image
                  src="/amazon-new.png"
                  alt="Amazon"
                  height={49.38}
                  width={140}
                />
              </div>
            </div>
          </div>

          {/* Right Side: 3D Graph Illustration */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-[350px] md:w-[450px] h-[250px] md:h-[320px] relative">
              <Image
                src="/company.png"
                alt="3D Graph Illustration of Unfair Advantage"
                height={321.13}
                width={503.89}
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
      {/* section 2*/}
      <section>
        <div className="flex justify-end mt-3.5">
          <Image src="/whatsapp.png" alt="image" height={44} width={44} />
        </div>
        {/* main div*/}
        <div className="flex  justify-center flex-col">
          <div className="flex justify-center pt-24 ">
            <p className="text-center max-w-3xl text-[18px] font-roboto">
              Rosa eSolutions, a leading digital marketing agency, offers
              comprehensive multi-platform
              <br />
              services designed to help your brand reach its full potential. Our
              diverse range of growth-
              <br />
              focused digital marketing solutions includes everything from
              Website Development and <br />
              SEO to SMM & Graphic Design to PR and Videography
            </p>
          </div>
          <section
            aria-label="Key services and approach"
            className="relative py-10"
          >
            <div className="container mx-auto mx  px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* 1. Revenue Growth */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl  hover:shadow-md transition">
                  <div className="mb-4 text-orange-500">
                    <Image
                      src="/image1small.png"
                      alt="icon"
                      height={87}
                      width={91}
                    />
                  </div>
                  <h3 className="text-[25px] font-roboto text-[#1E1666] font-semibold mb-2">
                    Revenue Growth
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Establishing well-thought online plans
                    <br />
                    and strategies to maximize growth for
                    <br /> your business.
                  </p>
                </div>

                {/* 2. Joint Collaboration */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl  hover:shadow-md transition">
                  <div className="mb-4 text-blue-500">
                    <Image
                      src="/image3small.png"
                      alt="icon"
                      height={87}
                      width={91}
                    />
                  </div>
                  <h3 className="text-[25px]  font-semibold text-[#1E1666]   mb-2 whitespace-nowrap">
                    Joint Collaboration
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our team will work closely and transparently with you in
                    order to achieve your business goals based on your budget
                    and desired results
                  </p>
                </div>

                {/* 3. Technical Assessment */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl  hover:shadow-md transition">
                  <div className="mb-4 text-green-500">
                    <Image
                      src="/image4small.png"
                      alt="icon"
                      height={87}
                      width={91}
                    />
                  </div>
                  <h3 className="text-[25px] font-roboto text-[#1E1666] font-semibold whitespace-nowrap mb-2">
                    Technical Assessment
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive assessment of your website and marketing
                    strategies to provide clear insights.
                  </p>
                </div>

                {/* 4. Digitalisation */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl  hover:shadow-md transition">
                  <div className="mb-4 text-purple-500">
                    <Image
                      src="/image2small.png"
                      alt="icon"
                      height={87}
                      width={91}
                    />
                  </div>
                  <h3 className="text-[25px] font-roboto text-[#1E1666] font-semibold mb-2">
                    Digitalisation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We help businesses of any size and industry boost their
                    marketing strategy and online presence.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* new section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          {/* --- Left Side: Illustration --- */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/digital marketing consultant.png" // replace with your image path
              height={402.83}
              width={577.98}
              alt="Illustration"
            />
          </div>

          {/* --- Right Side: Content --- */}
          <div className="flex-1">
            {/* Heading */}
            <h2 className="text-[35px] md:text-[32px] lg:text-[36px] font-bold text-[#1E1666] leading-snug mb-4">
              BUILD A WEBSITE THAT WILL <br />
              POSITIVELY IMPACT THE CORE <br />
              OF YOUR ONLINE PRESENCE
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
              Whether you need a simple WordPress website or a more complex
              eCommerce site, our team can assist you in generating remarkable
              results and strengthening your business.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {/* 1. Actionable Insights */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Image
                    src="/section3icon1.png"
                    height={57}
                    width={57}
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="text-[25px] font-semibold text-[#1E1666] mb-1">
                    Actionable Insights
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our team will describe competitive products, estimate the<br/>
                    market size, and identify entry barriers to help our clients<br/>
                    outshine their competitors.
                  </p>
                </div>
              </div>

              {/* 2. Traffic Analysis */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <Image
                    src="/section3icon2.png"
                    height={57}
                    width={57}
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="text-[25px] font-semibold text-[#1E1666] mb-1">
                    Traffic Analysis
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We create opportunities for your website to increase visitor<br/>
                    conversion, generate more quality traffic, and cross-sell
                    <br/>through analyzing your web statistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
