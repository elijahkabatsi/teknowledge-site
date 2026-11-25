import { motion } from 'framer-motion';
import { Eye, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-24 text-center max-w-4xl mx-auto">
        <p className="text-tekBlue font-bold tracking-wider text-sm mb-4 uppercase">ABOUT TEKNOWLEDGE</p>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Making Technology Work for People and Business.</h1>
        <p className="text-xl text-gray-600">We believe meaningful transformation happens when technology, strategy and human capabilities come together.</p>
      </motion.div>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transformation Is More Than Technology.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">New technologies create opportunities, but lasting impact depends on how organisations understand, adopt and apply them. Our approach connects technological innovation with business priorities and the people who make change happen.</p>
        </div>
        <div className="h-80 bg-tekLight rounded-3xl relative overflow-hidden flex items-center justify-center">
             <div className="w-40 h-40 border-4 border-tekBlue rounded-full absolute mix-blend-multiply opacity-20" />
             <div className="w-40 h-40 border-4 border-tekOrange rounded-full absolute mix-blend-multiply opacity-20 translate-x-10" />
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Eye, title: "Clarity", desc: "Make complex technology understandable and actionable." },
            { icon: Target, title: "Purpose", desc: "Connect technological decisions with meaningful business outcomes." },
            { icon: Users, title: "People", desc: "Recognise that successful transformation depends on the people involved." }
          ].map((principle, i) => (
            <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg shadow-gray-200/50">
              <principle.icon className="w-10 h-10 text-tekBlue mb-6" />
              <h3 className="text-2xl font-bold text-tekPurple mb-4">{principle.title}</h3>
              <p className="text-gray-600">{principle.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="py-32 bg-tekPurple text-center rounded-3xl px-6 my-12">
        <h2 className="text-4xl font-bold text-white mb-6">The Future Belongs to Organisations That Know How to Adapt.</h2>
        <p className="text-xl text-tekLight max-w-3xl mx-auto mb-10">AI is changing how businesses operate, compete and create value. We help organisations approach this change with the right perspective, capabilities and direction.</p>
        <button className="bg-tekOrange text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors">
          Contact Teknowledge
        </button>
      </motion.section>
    </div>
  );
}