import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Feature card data
const features = [
  {
    title: "Entertainment",
    description: "Comprehensive academic programs designed for excellence and innovation in education.",
    image: "/img/feature-01.jpg",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Restaurant",
    description: "Experienced and dedicated faculty committed to student success and mentorship.",
    image: "/img/feature-02.jpg",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Sports & Health",
    description: "State-of-the-art library with vast resources and quiet study spaces.",
    image: "/img/feature-03.jpg",
    gradient: "from-green-500 to-emerald-500"
  },
];

// Modern Feature Cards Component
export default function TopFeatures() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        {/* <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Premium Features
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Top <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Discover our premium offerings designed to elevate your experience with cutting-edge technology and innovation.
          </p>
        </div> */}

        {/* Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  return (
    <div 
      className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container with Overlay Button */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
        
        {/* Button on Image - Top Right */}
        <button className="group/btn absolute top-4 right-4 inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white font-medium rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
          Explore
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        {/* Floating Badge - Bottom Left */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xl font-medium text-gray-700 dark:text-gray-300">
            <span className={`w-2 h-2 rounded-full bg-linear-to-r ${feature.gradient}`}></span>
            {feature.title}
          </span>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-700 rounded-2xl transition-all duration-500 pointer-events-none"></div>
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
}