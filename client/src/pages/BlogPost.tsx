import { useRoute, Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { getBlogPost, blogPosts, formatDate } from "@/data/blogPosts";
import NotFound from "@/pages/NotFound";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = getBlogPost(slug);

  if (!post) {
    return <NotFound />;
  }

  // Find previous and next posts (by date)
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
  const currentIndex = sorted.findIndex((p) => p.slug === slug);
  const newerPost = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const olderPost = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 4).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedDate)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTimeMinutes} min read
              </span>
              <span>Dr. Milind Kale, MD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-5
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Box */}
            <div className="mt-12 p-6 bg-accent/20 rounded-lg border">
              <div className="flex items-start gap-4">
                <img
                  src="/dr-kale-photo.jpg"
                  alt="Dr. Milind Kale, MD"
                  className="h-16 w-16 rounded-full object-cover object-top flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-foreground">Dr. Milind Kale, MD</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Board-Certified Child and Adolescent Psychiatrist | Glastonbury, CT
                  </p>
                  <p className="text-sm text-foreground/80">
                    Dr. Kale provides independent psychiatric evaluations for Connecticut school
                    districts, supporting Individualized Education Program development, due process
                    prevention, and student safety assessments.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 bg-primary text-primary-foreground rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">
                Questions About an Evaluation for Your District?
              </h3>
              <p className="text-sm opacity-90 mb-4">
                I welcome consultations with Special Education Directors and school teams in
                Connecticut.
              </p>
              <Link href="/contact">
                <Button variant="secondary">Contact Dr. Kale</Button>
              </Link>
            </div>

            {/* Previous / Next Navigation */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {olderPost && (
                <Link href={`/blog/${olderPost.slug}`}>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                      <ArrowLeft className="h-3 w-3" /> Previous article
                    </p>
                    <p className="text-sm font-medium text-foreground leading-snug line-clamp-2">
                      {olderPost.title}
                    </p>
                  </div>
                </Link>
              )}
              {newerPost && (
                <Link href={`/blog/${newerPost.slug}`} className="md:ml-auto">
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer text-right">
                    <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1 justify-end">
                      Next article <ArrowRight className="h-3 w-3" />
                    </p>
                    <p className="text-sm font-medium text-foreground leading-snug line-clamp-2">
                      {newerPost.title}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
