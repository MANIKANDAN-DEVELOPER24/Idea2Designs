import {
  ArrowRight,
  Code,
  TrendingUp,
  CheckCircle,
  Users,
  Lightbulb,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    "Website Design & Development",
    "Marketing & SEO",
    "Brand Identity",
    "E-commerce Solutions",
    "Mobile App Development",
    "UI/UX Design",
  ];

  const whyChooseUs = [
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Creative Innovation",
      description:
        "We bring fresh, creative ideas to every project, ensuring your brand stands out.",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Goal-Oriented",
      description:
        "Your success is our priority. We focus on delivering measurable results.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Team",
      description:
        "Our team of skilled professionals brings years of experience to your project.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description:
        "We maintain the highest standards of quality in every deliverable.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-slate-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Transform Your <span className="text-blue-300">Ideas</span> into
            Reality
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 animate-fade-in-delay">
            We craft stunning digital experiences that drive results and elevate
            your brand
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg animate-fade-in-delay-2"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-6 bg-gray-50 overflow-hidden">
        <div className="animate-scroll-left whitespace-nowrap">
          {[...services, ...services].map((service, index) => (
            <span
              key={index}
              className="inline-block px-8 py-3 text-lg font-semibold text-gray-700"
            >
              {service} •
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Idea2Designs
            </h2>
            <p className="text-xl text-gray-600">
              We deliver excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At Idea2Designs, we're passionate about turning innovative ideas
                into exceptional digital solutions. Our team of creative
                professionals specializes in crafting websites and marketing
                strategies that help businesses thrive in the digital age.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With years of experience and a client-first approach, we're
                committed to delivering results that exceed expectations and
                drive real growth for your business.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">2+</div>
                  <div className="text-2xl">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  Website Design & Development
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                Custom websites that are beautiful, responsive, and optimized
                for performance. From simple landing pages to complex web
                applications, we build digital experiences that engage and
                convert.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  Marketing & SEO
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                Drive traffic and grow your business with our comprehensive
                digital marketing services. From SEO optimization to social
                media marketing, we help you reach your target audience and
                achieve your business goals.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
