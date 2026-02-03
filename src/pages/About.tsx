import { Target, Heart, Award, Users } from "lucide-react";
import Testimonials from "../components/Testimonials";

export default function About() {
  const team = [
    {
      name: "MANIKANDAN P ",
      role: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "DHEEPTHI M ",
      role: " Director",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "HARISH KUMAR M",
      role: "Marketing ",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: " AGATHIYAN S",
      role: "DevOps Engineer ",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

 const customers = [
   { name: "SplGain Money", logo: "/logos/logo1.png" },
   { name: "RightTouch", logo: "/logos/logo2.png" },
  //  { name: "Amaze Consultancy", logo: "#" },
  //  { name: "CloudSync", logo: "/logos/cloudsync.png" },
  //  { name: "DataPro", logo: "/logos/datapro.png" },
  //  { name: "WebForge", logo: "/logos/webforge.png" },
 ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-blue-600 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Idea2Designs</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're a passionate team dedicated to transforming innovative ideas
            into exceptional digital experiences
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2020, Idea2Designs began with a simple mission: to
                help businesses succeed in the digital world. What started as a
                small team of passionate designers and developers has grown into
                a full-service digital agency trusted by businesses worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We believe that every business has a unique story to tell, and
                we're here to help you tell it through stunning design, powerful
                technology, and effective marketing strategies.
              </p>
              <p className="text-lg text-gray-700">
                Today, we've helped over 100 businesses transform their digital
                presence, drive growth, and achieve their goals. Our commitment
                to excellence and innovation continues to drive everything we
                do.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6 transform transition-all hover:scale-105">
                <div className="flex items-center mb-3">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700">
                  To empower businesses with innovative digital solutions that
                  drive growth and success.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 transform transition-all hover:scale-105">
                <div className="flex items-center mb-3">
                  <Heart className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Values
                  </h3>
                </div>
                <p className="text-gray-700">
                  Innovation, quality, integrity, and client success are at the
                  heart of everything we do.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 transform transition-all hover:scale-105">
                <div className="flex items-center mb-3">
                  <Award className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Promise
                  </h3>
                </div>
                <p className="text-gray-700">
                  To deliver exceptional results that exceed expectations and
                  drive real business impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Idea2Designs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity, technical expertise, and strategic thinking
              to deliver solutions that truly make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Client-Focused
              </h3>
              <p className="text-gray-600">
                Your success is our success. We work closely with you to
                understand your needs and deliver solutions that align with your
                goals.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Our track record speaks for itself. We've helped businesses
                increase conversions, boost traffic, and grow their online
                presence.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Strategic Approach
              </h3>
              <p className="text-gray-600">
                We don't just build websites, we craft strategic digital
                experiences that drive measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet the Team Behind Idea2Designs
            </h2>
            <p className="text-xl text-gray-600">
              Our talented team of professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center transform transition-all hover:scale-105"
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Valuable Customers
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by innovative companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {customers.map((customer) => (
              <div
                key={customer.name}
                className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="h-17 object-contain  transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
