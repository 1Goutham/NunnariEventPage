
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ResearchCarousel from "./researchCarousel";



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
      "Discover how our AI solutions drive innovation, efficiency, and intelligent automation across industries, transforming business operations with real-world impact.",
    keywords: ["case studies", "AI solutions", "business transformation", "intelligent automation"],
    author: "nunnarilabs",
    url: "nunnarilabs.com",
    image: "https://nunnarilabs.com/case-studies-hero.jpg",
    type: "website",
  };

export default function CaseStudyHome() {
    const blog = getAllBlog();
    
    return (
        <div className="bg-[#010314]">
            <div className="max-w-[1200px] px-6 lg:px-10 mx-auto pt-20 md:pt-24">
        <div className="flex flex-col items-center text-center">
          <span className="pill">Research</span>
          <h2 className="headline mt-6 text-[34px] md:text-[45px] leading-[1.3] font-medium max-w-3xl">
            Latest research articles
          </h2>
          <p className="mt-5 text-[15px] leading-[27px] text-muted max-w-2xl">
            Notes from our engineers and researchers — what we&rsquo;re building,
            what we&rsquo;re learning, and where the field is heading.
          </p>
        </div>

            </div>

            <div className="max-w-[1200px] px-6 mx-auto lg:px-10 pt-12 pb-20 md:pb-24">
                <ResearchCarousel
                  posts={blog.map((b) => ({
                    slug: b.slug,
                    title: b.meta.title,
                    description: b.meta.description,
                    category: b.meta.category,
                    thumbnail: b.meta.thumbnail,
                    path: b.meta.path,
                    date: b.meta.date ? new Date(b.meta.date).toISOString() : null,
                  }))}
                />
            </div>
        </div>
    )
}