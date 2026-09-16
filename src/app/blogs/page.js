import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Navbar from "../../components/navbar";
import Grid from "../../components/grid";
import Footer from "../../components/footer";
import FootNote from "@/components/footNote";

export function getAllBlog() {
  const dir = path.join(process.cwd(), "src/_mdx_blog");
  const files = fs.readdirSync(dir);

  const blog = files
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data: frontMatter } = matter(fileContent);
      return {
        meta: frontMatter,
        slug: filename.replace(".mdx", ""),
      };
    })
    .filter((b) => !b.meta.draft)
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

  return blog;
}

export const metadata = {
  title: "Research articles",
  description:
    "Research articles from Nunnari Labs engineers: on-device AI, document intelligence, GPU infrastructure validation and AI governance, written from live engagements.",
};

export default function Home() {
  const blog = getAllBlog();
  return (
    <div className="bg-[#010314]">
      <Navbar />

      <header className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 md:pt-32 pb-16">
        <span className="pill">Research</span>
        <h1 className="headline mt-6 text-[40px] md:text-[56px] leading-[1.15] font-medium max-w-3xl">
          Research articles.
        </h1>
        <p className="mt-6 text-[15px] leading-[27px] text-muted max-w-2xl">
          Explore industry insights, expert opinions, and the latest trends
          shaping the future of business and technology.
        </p>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {blog?.map((post) => (
            <Grid
              key={post.meta.title}
              title={post.meta.title}
              description={post.meta.description}
              category={post.meta.category}
              thumbnail={post.meta.thumbnail}
              path={post.meta.path}
              date={post.meta.date}
            />
          ))}
        </div>
      </main>

      <Footer />
      <FootNote />
    </div>
  );
}
