import { RiReactjsLine } from "react-icons/ri"; // ícone do React
import { TbBrandNextjs } from "react-icons/tb"; // ícone do Next.js
import { SiMongodb } from "react-icons/si"; // ícone do MongoDB
import { DiRedis } from "react-icons/di"; // ícone do Redis
import { FaNodeJs } from "react-icons/fa"; // ícone do Node.js
import { BiLogoPostgresql } from "react-icons/bi"; // ícone do PostgreSQL
import { motion } from "framer-motion";

const Technologies = () => {
  // Variantes para o movimento suave dos ícones
  const iconVariants = (delay) => ({
    animate: {
      y: [0, -5, 0], // Movimento mais suave
      transition: {
        y: {
          repeat: Infinity,
          duration: 3, // Duração mais longa para um movimento mais suave
          ease: "easeInOut",
          delay: delay // Adiciona um atraso para a animação
        }
      }
    }
  });

  // Variantes para o movimento do título
  const titleVariants = {
    hidden: { opacity: 0, y: -50 }, // Começa invisível e acima
    visible: { opacity: 1, y: 0 }, // Fica visível e na posição original
    transition: { duration: 1, ease: "easeOut" } // Duração e suavização
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        className="my-20 text-center text-4xl"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        Tecnologias
      </motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(0)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.2)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.4)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.6)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiRedis className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(0.8)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.0)}
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
