import { backendSkills, frontendSkills } from "../../constants/constants";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8
         bg-gradient-to-r from-blue-500 to-cyan-400
          bg-clip-text text-transparent text-center"
          >
            Sobre mí
          </h2>
          <div
            className="glass rounded-xl p-8 border-white/10 border
         hover:translate-y-1 transition-all"
          >
            <p className="text-gray-300 mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              aut libero ducimus veniam quidem blanditiis, vitae similique saepe
              nulla. Incidunt officiis optio fuga vel asperiores explicabo
              dolore
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2 ">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2 ">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8">
            <div
              className="p-6 rounded-xl border-white/10 border
           hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold mb-4">Educación</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Bootcamp en desarrollo de aplicaciones full-stack Javascript
                  </strong>{" "}
                  Talento digital [2023]
                </li>
                <li>
                  <strong>Administración de redes y telecomunicaciones</strong>{" "}
                  Duoc UC [2019-2021]
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
