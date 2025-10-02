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
        <div className="flex justify-end mt-3.5 max-w-[1140px] mx-auto px-4">
          <Image src="/whatsapp.png" alt="image" height={44} width={44} />
        </div>
        {/* main div*/}
        <div className="flex flex-col items-center justify-center max-w-[1140px] mx-auto px-4">
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
            <div className="max-w-[1140px] mx-auto ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* 1. Revenue Growth */}
                <div className="flex flex-col items-center text-center  py-6 rounded-2xl  hover:shadow-md transition">
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
                  <p className="text-gray-600 text-[14px] font-normal">
                    Establishing well-thought online plans
                    <br /> and strategies to maximize growth for
                    <br /> your business.
                  </p>
                </div>

                {/* 2. Joint Collaboration */}
                <div className="flex flex-col items-center text-center  py-6 rounded-2xl  hover:shadow-md transition">
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
                  <p className="text-gray-600 text-[14px] font-normal">
                    Our team will work closely and
                    <br /> transparently with you in order to
                    <br />
                    achieve your business goals based on
                    <br /> your budget and desired results.
                  </p>
                </div>

                {/* 3. Technical Assessment */}
                <div className="flex flex-col items-center text-center  py-6 rounded-2xl  hover:shadow-md transition">
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
                  <p className="text-gray-600 text-[14px] font-normal">
                    Comprehensive assessment of your
                    <br /> website and existing marketing strategies to provide
                    you insights for improvement.
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
                  <p className="text-gray-600 text-[14px] font-normal">
                    We help businesses of any size and industry boost their
                    marketing strategy and increase online presence.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* new section */}
      <section className="relative py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
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
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#1E1666] leading-snug mb-4">
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
            <div className="space-y-8">
              {/* 1. Actionable Insights */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
                  <Image
                    src="/section3icon1.png"
                    height={57}
                    width={57}
                    alt="Actionable Insights"
                  />
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold text-[#1E1666] mb-1">
                    Actionable Insights
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our team will describe competitive products, estimate
                    <br /> the market size, and identify entry barriers to help
                    our clients
                    <br /> outshine their competitors.
                  </p>
                </div>
              </div>

              {/* 2. Traffic Analysis */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-purple-100">
                  <Image
                    src="/section3icon2.png"
                    height={57}
                    width={57}
                    alt="Traffic Analysis"
                  />
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold text-[#1E1666] mb-1">
                    Traffic Analysis
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We create opportunities for your website to increase visitor
                    <br />
                    conversion, generate more quality traffic, and cross-sell
                    through
                    <br />
                    analyzing your web statistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* new section */}
      <section className="relative mt-24 bg-[url('/sectionbg.png')] bg-no-repeat bg-cover bg-center py-40 px-4 sm:px-8 md:px-16">
        {/* Centered Content */}
        <div className="max-w-[1140px] mx-auto text-center relative z-10">
          <h2 className="text-[35px] md:text-3xl lg:text-4xl font-bold text-white leading-9">
            Ready to Elevate Your Business
            <br /> Success?
          </h2>
          <p className="mt-4 text-[17px] text-normal md:text-lg text-gray-200 leading-relaxed">
            Looking for a partner to simplify your journey and drive real
            results? Get in touch
            <br /> with Rosa eSolutions, your trusted Digital Marketing Agency
            in Dubai. Our team
            <br /> provides innovative strategies, advanced tools, and expert
            solutions to eliminate
            <br /> obstacles, boost growth, and ensure your business stays ahead
            in a competitive
            <br />
            market.
          </p>
        </div>

        {/* Rocket Image */}
        <div className="absolute bottom-107 right-30 md:right-20 lg:right-22 z-20">
          <Image
            src="/Rocket.png"
            alt="Rocket"
            width={388}
            height={279}
            className=""
          />
        </div>
      </section>
      <section className="relative py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          {/* --- Top Features Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {/* 1. Influence the Right Audience */}
            <div>
              <div className="flex items-start gap-3 mb-2">
                <Image
                  src="/checkicon.png"
                  alt="check"
                  height={50}
                  width={50}
                />
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[#1E1666] font-semibold text-[25px]">
                    INFLUENCE THE RIGHT
                    <br /> AUDIENCE
                  </h3>
                  <p className="text-[#575F69] text-[15px] font-normal leading-relaxed">
                    Establish meaningful and admirable
                    <br /> relationships with your customers. Our
                    <br />{" "}
                    <span className="text-[#337AB7]">
                      social media management
                    </span>{" "}
                    team will
                    <br /> handle everything so you can focus on
                    <br /> what really matters to your business.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Dominate Organic SEO */}
            <div>
              <div className="flex items-start gap-3 mb-2">
                <Image
                  src="/checkicon.png"
                  alt="check"
                  height={50}
                  width={50}
                />
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[#1E1666] font-semibold text-[25px]">
                    DOMINATE ORGANIC
                    <br /> SEO
                  </h3>
                  <p className="text-[#575F69] text-[15px] font-normal leading-relaxed">
                    Our{" "}
                    <span className="text-[#337AB7]">
                      search engine optimization
                    </span>{" "}
                    (SEO)
                    <br /> services are designed to optimize your
                    <br /> pages,to increase your website traffic,
                    <br /> improve your ranking, and solidify
                    <br /> your online presence.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Build High Converting Websites */}
            <div>
              <div className="flex items-start gap-3 mb-2">
                <Image
                  src="/checkicon.png"
                  alt="check"
                  height={50}
                  width={50}
                />
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[#1E1666] font-semibold text-[25px]">
                    BUILD HIGH
                    <br /> CONVERTING WEBSITES
                  </h3>
                  <p className="text-[#575F69] text-[15px] font-normal leading-relaxed">
                    Our in-house{" "}
                    <span className="text-[#337AB7]">web development</span> team
                    has
                    <br /> unmatched expertise in building high-
                    <br />
                    converting websites that will drive visitors
                    <br />
                    and improve customer conversion.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Know Your Market */}
            <div>
              <div className="flex items-start gap-3 mb-2">
                <Image
                  src="/checkicon.png"
                  alt="check"
                  height={50}
                  width={50}
                />
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[#1E1666] font-semibold text-[25px]">
                    KNOW YOUR MARKET
                  </h3>
                  <p className="text-[#575F69] text-[15px] font-normal leading-relaxed">
                    With our marketing analysis services, you
                    <br /> will get clear insights into your advertising
                    <br /> performance and boost your marketing
                    <br /> ROI.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Get Web Design that Stands Out */}
            <div>
              <div className="flex items-start gap-3 mb-2">
                <Image
                  src="/checkicon.png"
                  alt="check"
                  height={50}
                  width={50}
                />
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[#1E1666] font-semibold text-[25px]">
                    GET WEB DESIGN THAT
                    <br />
                    STANDS OUT
                  </h3>
                  <p className="text-[#575F69] text-[15px] font-normal leading-relaxed">
                    Make a statement with modern{" "}
                    <span className="text-[#337AB7]">
                      web
                      <br />
                      design services
                    </span>{" "}
                    designed to present
                    <br /> growth opportunities for your business
                    <br /> We build affordable and responsive
                    <br /> websites.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Outshine Your Competitor */}
            <div>
              <div className="flex items-start gap-3 mb-2">
                <Image
                  src="/checkicon.png"
                  alt="check"
                  height={50}
                  width={50}
                />
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[#1E1666] font-semibold text-[25px]">
                    OUTSHINE YOUR
                    <br />
                    COMPETITOR
                  </h3>
                  <p className="text-[#575F69] text-[15px] font-normal leading-relaxed">
                    We help brands whether big or small
                    <br /> increase their search rankings, beat their
                    <br />
                    competitors, and maximize business
                    <br /> opportunities through the power of the
                    <br /> Internet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Bottom Stats & Illustration --- */}
          <div className=" flex flex-col lg:flex-row items-center  gap-12">
            {/* Left Side - Text + Progress Bars */}
            <div className="flex-1">
              <h2 className="text-[#1E1666] font-bold text-[35px] md:text-3xl mb-4">
                EFFECTIVE BUSINESS
                <br /> DELIVERY SOLUTIONS AT A <br />
                GLANCE
              </h2>
              <p className="text-[#6A7C92] text-[17px] font-normal mb-8">
                Rosa eSolutions leverages on the following elements to provide
                <br />
                the best-quality services to our clients.
              </p>

              {/* Progress Bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1 text-sm font-medium">
                    <span className="text-[#1E1666] font-medium text-[17px]">
                      Creativity & Innovation
                    </span>
                    <span className="text-gray-300 font-normal text-[17px]">
                      91%
                    </span>
                  </div>
                  <div className="w-full bg-[#E2F0FD] rounded-[2px]  shadow-inner">
                    <div
                      className="bg-[#E54F38] h-7 rounded-[2px]"
                      style={{ width: "91%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-sm font-medium">
                    <span className="text-[#1E1666] font-medium text-[17px]">
                      Growth Boost
                    </span>
                    <span className="text-gray-300 font-normal text-[17px]">
                      91%
                    </span>
                  </div>
                  <div className="w-full bg-[#E2F0FD] rounded-[2px] shadow-inner">
                    <div
                      className="bg-[#1E0083] rounded-[2px] h-7"
                      style={{ width: "91%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-sm font-medium">
                    <span className="text-[#1E1666] font-medium text-[17px]">
                      Market Insight
                    </span>
                    <span className="text-gray-300 font-normal text-[17px]">
                      94%
                    </span>
                  </div>
                  <div className="w-full bg-[#E2F0FD] shadow-inner rounded-[2px]">
                    <div
                      className="bg-[#EBC951] h-7 rounded-[2px]"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-sm font-medium">
                    <span className="text-[#1E1666] font-medium text-[17px]">
                      Affordable Agency Fees
                    </span>
                    <span className="text-gray-300 font-normal text-[17px]">
                      99%
                    </span>
                  </div>
                  <div className="w-full bg-[#E2F0FD] shadow-inner rounded-[2px]">
                    <div
                      className="bg-[#38C969] h-7 rounded-[2px]"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/digital marketing agency dubai.png"
                alt="Business Illustration"
                height={397.91}
                width={566}
              />
            </div>
          </div>
        </div>
      </section>
      {/* new section  */}
      <section className="relative mt-24 bg-[url('/grayishbg.png')] bg-no-repeat bg-cover bg-center py-17  px-4 sm:px-8 md:px-16">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-[#FFFFFF] text-[35px] font-semibold">
              Remarkable Achievements: Success Stories That Matter
            </h1>
            <h1 className="text-white leading-none text-2xl font-bold ">——</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1440px] mx-auto pb-24">
            {/* Card 1 - Dr Zainab */}
            <div className="bg-white rounded-2xl   p-8 ">
              <h3 className="text-[#333333] text-[20px] font-semibold text-center mb-6">
                Dr Zainab
              </h3>

              <p className="text-[#8796A7] font-normal text-[15px] text-center text-sm leading-relaxed mb-8">
                Ross eSolutions team has been helping my digital marketing
                <br />
                growth for few years now and has contributed a lot to our
                <br /> website and SEO development, as well as strong Google My
                <br /> Bussiness presence. Over time, we have also expanded our
                <br />
                cooperation to Social media marketing services, and are <br />{" "}
                happy to see our growth on relevant social media
                <br />
                platforms,and Tik Tok especially.
                <br /> Our work MO was well understood by team eRosa and they
                <br />
                always made sure to navigate their digital marketing activites{" "}
                <br />
                in a manner to align the work of my clinic.I'm thankful for{" "}
                <br />
                experience provied by them.
              </p>

              <div className="">
                <p className="text-gray-900 font-semibold text-center mb-3">
                  Dr. Zainab Al-Azzawi
                </p>
                <div className="flex justify-center ">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-3xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 - American Medical and Dental Center */}
            <div className="bg-white rounded-2xl p-8 ">
              <h3 className="text-gray-900 text-xl font-semibold text-center mb-6">
                American Medical and Dental Center
              </h3>

              <p className="text-[#8796A7] font-normal text-[15px] text-center  leading-relaxed mb-8">
                It has been almost 5 years since we handed all our digital
                <br />
                presence to Rosa eSolutions and we couldn't be happier with
                <br /> our choice. From Website development, SEO, to Google Ads,
                <br /> Email Marketing and Social media marketing, we have
                <br /> experienced steady growth of our overall marketing <br />{" "}
                reputation.
                <br /> The thing we especially admire when working with this
                <br /> marketing team is that every unexpected urgent marketing{" "}
                <br /> situation to be handled has always been taken care of,
                <br /> regardless of the time or day in the week. We look
                forward to
                <br /> continue this partnership in the long run.
              </p>

              <div className="">
                <p className="text-gray-900 font-semibold text-center mb-3">
                  Dr. Wael Baydoun
                </p>
                <div className="flex justify-center ">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-3xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  {/* new section */}


<section className="bg-[#699AE6] py-8 px-4 mt-20">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
      {/* Stat 1 - Completed Projects */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[#0831AE] text-[60px] md:text-5xl font-bold mb-2">
          3K
        </h3>
        <p className="text-white text-[20px] md:text-base font-semibold">
          Completed Projects
        </p>
      </div>

      {/* Stat 2 - Satisfaction Rate */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[#0831AE] text-[60px] md:text-5xl font-bold mb-2">
          99%
        </h3>
        <p className="text-white text-[20px] md:text-base font-semibold">
          Satisfaction Rate
        </p>
      </div>

      {/* Stat 3 - Customers */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[#0831AE] text-[60px] md:text-5xl font-bold mb-2">
          6K+
        </h3>
        <p className="text-white text-[20px] md:text-base font-semibold">
          Customers
        </p>
      </div>

      {/* Stat 4 - Years of Experience */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[#0831AE] text-[60px] md:text-5xl font-bold mb-2">
          19
        </h3>
        <p className="text-white text-[20px] md:text-base font-semibold">
          Years of Experience
        </p>
      </div>
    </div>
  </div>
</section>
{/* new little section */}
<section className="bg-gray-50 py-16 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="flex flex-col items-center mb-12">
      <h2 className="text-black text-3xl md:text-4xl font-bold mb-2">
        Our Clients
      </h2>
      <div className="w-16 h-1 bg-indigo-600 rounded-full"></div>
    </div>

    {/* Client Logos Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
      {/* Logo Card 1 - myPediaclinic */}
      <div className="bg-white rounded-lg  p-6 flex items-center justify-center hover:shadow-lg ">
        <img 
          src="/mypediaclinic-logo.png" 
          alt="myPediaclinic" 
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Logo Card 2 - EDB */}
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow h-32">
        <img 
          src="/edb-logo.png" 
          alt="Emirates Development Bank" 
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Logo Card 3 - B360 Watch */}
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow h-32">
        <img 
          src="/b360-logo.png" 
          alt="B360 Watch" 
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Logo Card 4 - Dr. Zainab Al-Azzawi */}
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow h-32">
        <img 
          src="/drzainab-logo.png" 
          alt="Dr. Zainab Al-Azzawi" 
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Logo Card 5 - Aras Group */}
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow h-32">
        <img 
          src="/aras-logo.png" 
          alt="Aras Group" 
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>

    {/* Carousel Dots */}
    <div className="flex justify-center gap-2">
      <button 
        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-indigo-600 transition-colors"
        aria-label="Slide 1"
      ></button>
      <button 
        className="w-2 h-2 rounded-full bg-indigo-600"
        aria-label="Slide 2"
      ></button>
      <button 
        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-indigo-600 transition-colors"
        aria-label="Slide 3"
      ></button>
      <button 
        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-indigo-600 transition-colors"
        aria-label="Slide 4"
      ></button>
      <button 
        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-indigo-600 transition-colors"
        aria-label="Slide 5"
      ></button>
      <button 
        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-indigo-600 transition-colors"
        aria-label="Slide 6"
      ></button>
      <button 
        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-indigo-600 transition-colors"
        aria-label="Slide 7"
      ></button>
      <button 
        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-indigo-600 transition-colors"
        aria-label="Slide 8"
      ></button>
      <button 
        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-indigo-600 transition-colors"
        aria-label="Slide 9"
      ></button>
      <button 
        className="w-2 h-2 rounded-full bg-gray-300 hover:bg-indigo-600 transition-colors"
        aria-label="Slide 10"
      ></button>
    </div>
  </div>
</section>


    </div>
  );
}
