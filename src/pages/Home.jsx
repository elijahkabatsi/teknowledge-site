import { motion } from 'framer-motion';
import { ArrowRight, Brain, Compass, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero */}
      <motion.section initial="hidden" animate="visible" variants={fadeIn} className="py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-tekBlue font-bold tracking-wider text-sm mb-4 uppercase">AI & Digital Transformation</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">Turn AI Potential Into <span className="text-tekPurple">Business Impact.</span></h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">Teknowledge helps organisations navigate technological change, accelerate AI adoption and build the capabilities needed to thrive in a digital-first world.</p>
          <div className="flex gap-4">
            <Link to="/services" className="bg-tekBlue text-white px-8 py-4 rounded-lg hover:bg-tekPurple transition-colors font-medium">Explore Our Services</Link>
          </div>
        </div>
      </motion.section>

      {/* Intro */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-24 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Creates Possibilities. Strategy Turns Them Into Progress.</h2>
        <p className="text-xl text-gray-600">Successful transformation is about more than implementing new tools. It requires the right strategy, the right capabilities and a clear understanding of business priorities.</p>
      </motion.section>

      {/* Service Cards */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Explore Our Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "AI Transformation", desc: "Identify opportunities for AI adoption and translate emerging technologies into practical business value.", icon: Brain, link: "/services" },
            { title: "Technology Advisory", desc: "Navigate complex technology decisions with a clear strategy aligned with your business objectives.", icon: Compass, link: "/services" },
            { title: "Digital Enablement", desc: "Equip teams with the knowledge, processes and capabilities needed to embrace technological change.", icon: Users, link: "/services" }
          ].map((service, i) => (
            <div key={i} className="bg-tekBlue p-8 rounded-2xl text-white hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-tekBlue/20">
              <service.icon className="w-12 h-12 mb-6 text-tekOrange" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-tekLight mb-8">{service.desc}</p>
              <Link to={service.link} className="flex items-center gap-2 text-white font-medium group">
                Discover {service.title.split(' ')[0]} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}