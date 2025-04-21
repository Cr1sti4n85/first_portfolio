import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8
         bg-gradient-to-r from-blue-500 to-cyan-400
          bg-clip-text text-transparent text-center"
          >
            Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
          hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)
          transition"
            >
              <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                animi nobis laboriosam eaque laudantium voluptas dicta,
                perspiciatis vel culpa nam nihil itaque et dolorem at aliquid
                maiores, ut voluptatibus repellat.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
               hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://proshop-ysy4.onrender.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver DEMO{" "}
                </a>
                <a
                  href="https://github.com/Cr1sti4n85/proshop"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Repo{" "}
                </a>
              </div>
            </div>
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
          hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)
          transition"
            >
              <h3 className="text-xl font-bold mb-2">Chat App</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                animi nobis laboriosam eaque laudantium voluptas dicta,
                perspiciatis vel culpa nam nihil itaque et dolorem at aliquid
                maiores, ut voluptatibus repellat.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
               hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://chatty-p4i8.onrender.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver DEMO{" "}
                </a>
                <a
                  href="https://github.com/Cr1sti4n85/proshop"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Repo{" "}
                </a>
              </div>
            </div>
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
          hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)
          transition"
            >
              <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                animi nobis laboriosam eaque laudantium voluptas dicta,
                perspiciatis vel culpa nam nihil itaque et dolorem at aliquid
                maiores, ut voluptatibus repellat.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
               hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://proshop-ysy4.onrender.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver DEMO{" "}
                </a>
                <a
                  href="https://github.com/Cr1sti4n85/proshop"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Repo{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
