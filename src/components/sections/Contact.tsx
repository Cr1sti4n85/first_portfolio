import RevealOnScroll from "../RevealOnScroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2
            className="text-3xl font-bold mb-8
         bg-gradient-to-r from-blue-500 to-cyan-400
          bg-clip-text text-transparent text-center"
          >
            Contáctame
          </h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                required
                className="w-full bg-white/5 border border-white/10 rounded
                px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="usuario@email.com"
                required
                className="w-full bg-white/5 border border-white/10 rounded
                px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <textarea
                typeof="message"
                id="message"
                name="message"
                placeholder="Escriba su mensaje aquí..."
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded
                px-4 py-3 text-white transition focus:outline-none focus:border-blue-500
                focus:bg-blue-500/5"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white
                px-6 py-3 rounded font-medium transition relative overflow-hidden
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Contact;
