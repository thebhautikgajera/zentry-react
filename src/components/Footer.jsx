import { FaDiscord, FaTwitter, FaYoutube, FaTwitch } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord />, label: "Join our Gaming Community" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Follow Latest Updates" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "Watch Game Content" },
  { href: "https://twitch.tv", icon: <FaTwitch />, label: "Live Streams" },
];

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.15,
      rotate: [0, -10, 10, 0],
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
      },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full overflow-hidden bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-900 py-8 text-slate-100 sm:py-12 lg:py-16"
    >
      <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-10"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mb-12 lg:grid-cols-3 lg:gap-12">
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="transform transition-all duration-300"
          >
            <h3 className="mb-4 font-bold uppercase tracking-widest text-violet-300 sm:mb-6">Explore Zentry</h3>
            <ul className="space-y-3 sm:space-y-4">
              <motion.li whileHover={{ x: 5 }}>
                <a href="#game-worlds" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-violet-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "2rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-violet-400"
                  ></motion.span>
                  Game Worlds
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#characters" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-violet-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "2rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-violet-400"
                  ></motion.span>
                  Characters
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#marketplace" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-violet-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "2rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-violet-400"
                  ></motion.span>
                  Marketplace
                </a>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="transform transition-all duration-300"
          >
            <h3 className="mb-4 font-bold uppercase tracking-widest text-violet-300 sm:mb-6">Community</h3>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  title={link.label}
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute -inset-2 -z-10 rounded-lg bg-violet-500/20 blur-lg"
                  ></motion.span>
                  <span className="text-xl sm:text-2xl transition-all duration-300 group-hover:text-violet-300">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="transform transition-all duration-300"
          >
            <h3 className="mb-4 font-bold uppercase tracking-widest text-violet-300 sm:mb-6">Resources</h3>
            <ul className="space-y-3 sm:space-y-4">
              <motion.li whileHover={{ x: 5 }}>
                <a href="#game-guide" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-violet-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "2rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-violet-400"
                  ></motion.span>
                  Game Guide
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#documentation" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-violet-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "2rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-violet-400"
                  ></motion.span>
                  Documentation
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#support" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-violet-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "2rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-violet-400"
                  ></motion.span>
                  Support
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-6 text-center sm:pt-8 lg:flex-row lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs sm:text-sm text-violet-200"
          >
            ©2024 Zentry Games. Crafting Epic Gaming Experiences.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group flex items-center rounded-full bg-violet-900/30 px-4 py-2 sm:px-6 transition-all duration-300 hover:bg-violet-800/40"
          >
            <SiEpicgames className="mr-2 sm:mr-3 text-lg sm:text-xl text-violet-300" />
            <span className="text-xs sm:text-sm font-medium text-violet-200">Play Now</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
