
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Door Design Trends That Will Transform Your Home in 2025",
      excerpt: "Discover the latest door design trends that are reshaping modern homes. From minimalist styles to bold statement pieces.",
      author: "Priya Sharma",
      date: "September 15, 2025",
      readTime: "5 min read",
      category: "Design Trends",
      image: "Modern door design trends showcasing various styles and materials for 2025",
      featured: true
    },
    {
      id: 2,
      title: "Creating the Perfect Pooja Room: A Complete Guide",
      excerpt: "Learn how to design a sacred space that brings peace and positive energy to your home with our comprehensive guide.",
      author: "Rajesh Kumar",
      date: "September 12, 2025",
      readTime: "8 min read",
      category: "Spiritual Design",
      image: "Beautiful pooja room design with traditional elements and modern touches",
      featured: false
    },
    {
      id: 3,
      title: "Wall Art Ideas That Make a Statement",
      excerpt: "Transform your blank walls into stunning focal points with these creative wall art ideas and placement tips.",
      author: "Anita Desai",
      date: "September 10, 2025",
      readTime: "6 min read",
      category: "Interior Design",
      image: "Creative wall art arrangements in modern living spaces",
      featured: false
    },
    {
      id: 4,
      title: "Choosing the Right Railing for Your Home's Safety and Style",
      excerpt: "A comprehensive guide to selecting railings that combine safety, durability, and aesthetic appeal for your property.",
      author: "Vikram Singh",
      date: "September 8, 2025",
      readTime: "7 min read",
      category: "Safety & Design",
      image: "Various railing designs showcasing safety and style combinations",
      featured: false
    },
    {
      id: 5,
      title: "The Art of Door Hardware: Small Details, Big Impact",
      excerpt: "Explore how the right door handles, hinges, and hardware can elevate your door design from ordinary to extraordinary.",
      author: "Meera Patel",
      date: "September 5, 2025",
      readTime: "4 min read",
      category: "Hardware Guide",
      image: "Premium door hardware and handles showcasing craftsmanship and design",
      featured: false
    },
    {
      id: 6,
      title: "Sustainable Home Design: Eco-Friendly Door and Decor Options",
      excerpt: "Discover environmentally conscious choices for your home design that don't compromise on style or quality.",
      author: "Arjun Mehta",
      date: "September 3, 2025",
      readTime: "9 min read",
      category: "Sustainability",
      image: "Eco-friendly home design elements including sustainable doors and decor",
      featured: false
    }
  ];

  const handleReadMore = (postTitle) => {
    toast({
      title: "Opening Article",
      description: `🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Design Insights & Tips
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and inspiration for your home design journey
          </p>
        </motion.div>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={post.title}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-stone-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3 text-stone-800 line-clamp-2 group-hover:text-green-700 transition-colors">
                  {post.title}
                </h3>

                <p className="text-stone-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-stone-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-green-700 hover:text-green-800 p-0"
                    onClick={() => handleReadMore(post.title)}
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" className="px-8">
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
