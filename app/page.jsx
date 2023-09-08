// "use client"

import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI powered prompts</span>
      </h1>
      <p className="desc text-center">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      </p>

      <Feed/>
    </section>

    
  );
};

export default Home;