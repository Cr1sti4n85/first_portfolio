import { useState } from "react";
import emailjs from "emailjs-com";
import RevealOnScroll from "../RevealOnScroll";
import { FormContent } from "../../types";

const Contact = () => {
  const [formData, setFormData] = useState<FormContent>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Mensaje enviado con éxito!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert(
        "Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2
            className="text-3xl font-bold mb-8
         bg-gradient-to-r from-blue-500 to-cyan-400
          bg-clip-text text-transparent text-center"
          >
            Contáctame
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
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
