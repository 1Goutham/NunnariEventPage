import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { notFound } from "next/navigation";

import "highlight.js/styles/night-owl.css";
import "katex/dist/katex.min.css";

import Navbar from "@components/navbar";
import BreadcrumbLd from "@/components/breadcrumbLd";
import Footer from "@components/footer";
import FootNote from "@/components/footNote";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  },
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/_mdx_blog"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

export async function generateMetadata({ params: { slug } }) {
  const filePath = path.join(process.cwd(), `src/_mdx_blog`, `${slug}.mdx`);

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data: frontMatter } = matter(fileContent);

  const image = frontMatter.image || "/default.jpg";
  const url = frontMatter.url || `https://nunnarilabs.com/blogs/${slug}`;

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description,
      url,
      siteName: "Nunnari Labs",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      author: [{ name: frontMatter.author, url: frontMatter.authorImage }],
      creator: frontMatter.author,
      tags: frontMatter?.tags?.join(", "),
    },
  };
}

function getBlogBySlug({ slug }) {
  const markdownFile = fs.readFileSync(path.join(process.cwd(), `src/_mdx_blog/${slug}.mdx`), "utf-8");

  if (!markdownFile) {
    notFound();
  }
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

function formatDate(date) {
  if (!date) return null;
  const d = new Date(date);
  if (isNaN(d)) return null;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost({ params }) {
  const { frontMatter, content } = getBlogBySlug(params);
  const date = formatDate(frontMatter.date);

  return (
    <div className="bg-[#010314]">
      <Navbar />

      <header className="border-b border-line">
        <BreadcrumbLd label={frontMatter.title} />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 md:pt-32 pb-14">
          <a
            href="/blogs"
            className="text-muted hover:text-ink text-sm transition-colors"
          >
            ← All research articles
          </a>

          {frontMatter.category ? (
            <p className="mt-8 text-sm text-dim">
              {frontMatter.category}
            </p>
          ) : null}

          <h1 className="headline mt-6 text-[36px] md:text-[48px] lg:text-[56px] leading-[1.15] font-medium max-w-4xl">
            {frontMatter.title}
          </h1>

          {frontMatter.description ? (
            <p className="mt-6 text-[15px] leading-[27px] text-muted max-w-2xl">
              {frontMatter.description}
            </p>
          ) : null}

          {date || frontMatter.author ? (
            <p className="mt-10 text-sm text-dim">
              {[date, frontMatter.author].filter(Boolean).join(" · ")}
            </p>
          ) : null}

          {frontMatter.thumbnail ? (
            <div className="relative mt-12 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-2xl border border-line">
              <Image src={frontMatter.thumbnail} alt="" fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            </div>
          ) : null}
        </div>
      </header>

      <article className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="prose prose-base md:prose-lg !prose-invert max-w-2xl prose-headings:tracking-tight prose-p:text-muted prose-li:text-muted prose-strong:text-[#FCFCFA] prose-a:text-[#FCFCFA] prose-img:rounded-2xl prose-img:border prose-img:border-line">
          <MDXRemote source={content} options={options} />
        </div>
      </article>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-16">
      </div>

      <Footer />
      <FootNote />
    </div>
  );
}
