import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-24">
        <p className="text-sm text-gray-500 mb-4">Home / Services</p>
        <p className="text-tekBlue font-bold tracking-wider text-sm mb-4 uppercase">OUR SERVICES</p>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Technology Solutions for a Changing World.</h1>
        <p className="text-xl text-gray-600 max-w-3xl">From AI strategy to organisational enablement, we help businesses translate technological opportunity into meaningful progress.</p>
      </motion.div>

      <div className="space-y-32">
        {[
          { title: "AI Transformation", desc: "Discover where AI can create value, establish a clear direction and build the foundations for successful adoption.", points: ["AI strategy", "AI opportunity identification", "AI adoption planning", "Responsible AI considerations"] },
          { title: "Technology Advisory", desc: "Make informed technology decisions that support your business strategy and long-term objectives.", points: ["Technology strategy", "Digital transformation roadmaps", "Technology assessment", "Strategic planning"] },
          { title: "Digital Enablement", desc: "Help people and organisations develop the capabilities needed to make technology work in practice.", points: ["AI literacy and education", "Leadership enablement", "Change management", "Organisational capability development"] }
        ].map((svc, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`p-12 rounded-3xl ${i % 2 === 0 ? 'bg-tekLavender/30' : 'bg-tekLight'}`}>
              {/* Placeholder for the transparent WebGL or Logo imagery */}
              <div className="w-32 h-32 bg-tekBlue/10 rounded-full flex items-center justify-center m-auto">
                 <div className="w-16 h-16 bg-tekBlue rounded-lg opacity-50 rotate-45" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-tekPurple mb-6">{svc.title}</h2>
              <p className="text-lg text-gray-600 mb-8">{svc.desc}</p>
              <ul className="space-y-4">
                {svc.points.map((pt, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-tekOrange" /> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}