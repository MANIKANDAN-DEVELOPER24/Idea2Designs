
import {
  Code,
  TrendingUp,
  Smartphone,
  Palette,
  ShoppingCart,
  Megaphone,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Website Design & Development",
      description:
        "Create stunning, responsive websites that captivate your audience and drive conversions.",
      features: [
        "Custom responsive design",
        "Modern front-end development",
        "Content management systems",
        "E-commerce integration",
        "Performance optimization",
        "Cross-browser compatibility",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: "Marketing & SEO",
      description:
        "Boost your online visibility and drive targeted traffic with data-driven marketing strategies.",
      features: [
        "Search engine optimization",
        "Content marketing strategy",
        "Social media marketing",
        "Pay-per-click advertising",
        "Email marketing campaigns",
        "Analytics and reporting",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      title: "Brand Identity",
      description:
        "Build a memorable brand that resonates with your target audience and stands out from competitors.",
      features: [
        "Logo design",
        "Brand strategy",
        "Visual identity systems",
        "Brand guidelines",
        "Marketing collateral",
        "Brand positioning",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-orange-600" />,
      title: "E-commerce Solutions",
      description:
        "Launch and grow your online store with powerful e-commerce platforms and strategies.",
      features: [
        "Online store development",
        "Payment gateway integration",
        "Inventory management",
        "Product catalog design",
        "Shopping cart optimization",
        "Order management systems",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-cyan-600" />,
      title: "Mobile App Development",
      description:
        "Engage your customers on the go with intuitive mobile applications for iOS and Android.",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "App UI/UX design",
        "App store optimization",
        "Push notifications",
        "App maintenance & updates",
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-rose-600" />,
      title: "Digital Strategy",
      description:
        "Develop comprehensive digital strategies that align with your business goals and drive growth.",
      features: [
        "Digital transformation",
        "Competitor analysis",
        "Customer journey mapping",
        "Growth strategy planning",
        "Technology consulting",
        "Performance metrics",
      ],
      color: "from-rose-500 to-rose-600",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-blue-600 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
            and achieve your goals
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white shadow-xl transform transition-all hover:scale-105`}
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                        {service.icon}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg opacity-90">{service.description}</p>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    What We Offer
                  </h3>
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can help you achieve your goals
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
