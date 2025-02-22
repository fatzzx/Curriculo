import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex justify-center -mt-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 to-cyan-400 p-1 shadow-lg">
            <img
              src="/src/assets/img/fotoperfil.jpeg"
              alt="Felipe Farias"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="text-center z-10 px-4 mt-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Olá, me chamo Felipe Farias!
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            👋 Olá! Sou Felipe Spinola Farias, estudante de Engenharia da
            Computação e profissional na área de desenvolvimento de sistemas.
            Sou apaixonado por tecnologia e sempre busco novos desafios para
            aprender e crescer.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
