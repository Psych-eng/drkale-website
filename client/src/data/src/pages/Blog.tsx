import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts, formatDate } from "@/data/blogPosts";

export default function Blog() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Resources for School Districts and Special Education Teams
            </h1>
            <p className="text-lg text-muted-foreground">
              Practical insights on psychiatric evaluations, legal compliance, Individualized Education
              Program development, and student mental health — written for Special Education Directors
              and school psychologists in Connecticut.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-8">
            {sortedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col gap-3">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                      {/* Meta Row */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.publishedDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readingTimeMinutes} min read
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                          Read article <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Complex Case You Would Like to Discuss?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            I am available for consultations with Connecticut school districts. Reach out to discuss
            your district's evaluation needs.
          </p>
          <Link href="/contact">
            <button className="bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-white/90 transition-colors">
              Contact Dr. Kale
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

