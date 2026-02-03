import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AUTO_SCROLL_SPEED = 0.5;

type Testimonial = {
  id: number;
  name: string;
  location: string;
  review: string;
  rating: number;
  image: string;
  link: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "SplGain Money ",
    location: "Chennai",
    review: "Our Business Static Website was build perfectly with Given time .",
    rating: 5,
    image: "testimonials/logo.png",
    link: "https://manikandan-developer24.github.io/splgainmoney/",
  },
//   {
//     id: 2,
//     name: "Suresh Mani",
//     location: "Coimbatore",
//     review: "Very professional service and on-time pickup.",
//     rating: 4,
//     image: "https://i.pravatar.cc/150?img=32",
//     link: "https://facebook.com",
//   },
//   {
//     id: 3,
//     name: "Priya Devi",
//     location: "Madurai",
//     review: "Best scrap collection service I’ve used.",
//     rating: 5,
//     image: "https://i.pravatar.cc/150?img=45",
//     link: "https://twitter.com",
//   },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrame: number;

    const scrollLeft = () => {
      if (!containerRef.current) return;

      if (!isPaused) {
        const container = containerRef.current;
        container.scrollLeft += AUTO_SCROLL_SPEED;

        // when reach end → reset smoothly
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 1
        ) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(scrollLeft);
    };

    animationFrame = requestAnimationFrame(scrollLeft);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Customers Say
      </h2>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-hidden px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {testimonials.map((user) => (
          <motion.a
            key={user.id}
            href={user.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="min-w-[300px] bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition cursor-pointer select-none"
          >
            {/* Stars */}
            <div className="flex mb-3">
              {[...Array(user.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 mb-5">"{user.review}"</p>

            {/* User info */}
            <div className="flex items-center gap-4">
              <img
                src={user.image}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{user.name}</p>
                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
