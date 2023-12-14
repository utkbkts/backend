import Hero from "@/shared/Hero";
import LatestPost from "@/shared/LatestPost";
import Slider from "@/shared/Slider";
import Toppost from "@/shared/Toppost";
import prisma from "@/lib/prismadb";

const Home = async () => {
  const posts = await prisma.blog.findMany({
    include: {
      user: true,
    },
  });

  return (
    <section className="relative">
      <Slider posts={posts as any} />
      <Hero posts={posts as any} />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10">
        <LatestPost posts={posts as any} />
        <Toppost posts={posts as any} />
      </div>
    </section>
  );
};

export default Home;
