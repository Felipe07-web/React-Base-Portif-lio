import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  // Variantes para animação dos projetos
  const projectVariants = (delay) => ({
    hidden: { opacity: 0, y: 50 }, // Começa invisível e abaixo
    visible: { opacity: 1, y: 0 }, // Fica visível e na posição original
    transition: { 
      duration: 1.2, // Duração aumentada para uma animação mais lenta
      ease: "easeOut",
      delay: delay // Adiciona um atraso para a animação
    }
  });

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }} // Ajusta a duração para o título
      >
        Projetos
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 w-full max-w-xs lg:max-w-sm p-4"
            initial="hidden"
            whileInView="visible"
            variants={projectVariants(index * 0.2)} // Adiciona um atraso alternado para cada projeto
            viewport={{ once: true }} // Anima apenas uma vez quando visível
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold text-center">{project.title}</h3>
            <p className="text-center text-neutral-500">{project.description}</p>
            <div className="flex flex-wrap justify-center mt-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
