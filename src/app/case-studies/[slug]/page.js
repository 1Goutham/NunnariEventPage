import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "highlight.js/styles/night-owl.css";

import Navbar from "@components/navbar";
import BreadcrumbLd from "@/components/breadcrumbLd";
import Footer from "@components/footer";
import FootNote from "@/components/footNote";
import Cta from "@/components/cta";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  },
};

export async function generateStaticParams() {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/_mdx_case_studies")
  );
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export async function generateMetadata({ params: { slug } }) {
  const filePath = path.join(
    process.cwd(),
    "src/_mdx_case_studies",
    `${slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontMatter } = matter(fileContent);

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description,
      url: `https://nunnarilabs.com/case-studies/${slug}`,
      siteName: "Nunnari Labs",
      locale: "en_US",
      type: "article",
    },
  };
}

function getCaseStudyBySlug({ slug }) {
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), `src/_mdx_case_studies/${slug}.mdx`),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return { frontMatter, slug, content };
}

export default function CaseStudy({ params }) {
  const { frontMatter, content } = getCaseStudyBySlug(params);

  return (
    <div className="bg-[#010314]">
      <Navbar />

      <header className="border-b border-line">
        <BreadcrumbLd label={frontMatter.title} />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 md:pt-32 pb-14">
          <a
            href="/case-studies"
            className="text-muted hover:text-ink text-sm transition-colors"
          >
            ← All work
          </a>

          <p className="mt-8 text-sm text-dim">
            {frontMatter.industry}
          </p>

          <h1 className="headline mt-6 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.15] font-medium max-w-4xl">
            {frontMatter.title}
          </h1>

          <p className="mt-6 text-[15px] leading-[27px] text-muted max-w-2xl">
            {frontMatter.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-sm text-ink/80 border border-line rounded-full px-2.5 py-1 bg-white/5">
              {frontMatter.system}
            </span>
            {frontMatter.metric ? (
              <span className="text-sm text-ink border border-line rounded-full px-2.5 py-1 bg-white/5">
                {frontMatter.metric}
              </span>
            ) : null}
            {frontMatter.tags?.map((t) => (
              <span
                key={t}
                className="text-sm text-dim border border-line rounded-full px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      <article className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="prose prose-base md:prose-lg !prose-invert max-w-2xl prose-headings:tracking-tight prose-headings:font-semibold prose-p:text-muted prose-li:text-muted prose-strong:text-[#FCFCFA] prose-a:text-[#FCFCFA]">
          <MDXRemote source={content} options={options} />
        </div>
      </article>

      <Cta />
      <Footer />
      <FootNote />
    </div>
  );
}
