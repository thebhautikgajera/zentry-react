import { FaDiscord, FaTwitter, FaYoutube, FaTwitch } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord />, label: "Join our Metaverse Community" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Follow Metaverse Updates" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "Watch Virtual Experiences" },
  { href: "https://twitch.tv", icon: <FaTwitch />, label: "Live Virtual Events" },
];

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        stiffness: 100,
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-8 text-slate-100 sm:py-12 lg:py-16"
    >
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mb-12 lg:grid-cols-3 lg:gap-12">
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="transform transition-all duration-300"
          >
            <h3 className="mb-4 font-bold uppercase tracking-widest text-cyan-300 sm:mb-6">Explore Metaverse</h3>
            <ul className="space-y-3 sm:space-y-4">
              <motion.li whileHover={{ x: 5 }}>
                <a href="#virtual-worlds" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-cyan-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "1.5rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-cyan-400"
                  ></motion.span>
                  Virtual Worlds
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#digital-assets" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-cyan-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "1.5rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-cyan-400"
                  ></motion.span>
                  Digital Assets
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#meta-token" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-cyan-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "1.5rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-cyan-400"
                  ></motion.span>
                  Meta Tokens
                </a>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="transform transition-all duration-300"
          >
            <h3 className="mb-4 font-bold uppercase tracking-widest text-cyan-300 sm:mb-6">Virtual Community</h3>
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
                    className="absolute -inset-2 -z-10 rounded-lg bg-cyan-500/20 blur"
                  ></motion.span>
                  <span className="text-xl sm:text-2xl transition-all duration-300 group-hover:text-cyan-300">
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
            <h3 className="mb-4 font-bold uppercase tracking-widest text-cyan-300 sm:mb-6">Meta Resources</h3>
            <ul className="space-y-3 sm:space-y-4">
              <motion.li whileHover={{ x: 5 }}>
                <a href="#metaverse-guide" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-cyan-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "1.5rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-cyan-400"
                  ></motion.span>
                  Metaverse Guide
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#virtual-docs" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-cyan-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "1.5rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-cyan-400"
                  ></motion.span>
                  Virtual Documentation
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#meta-policy" className="group flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-cyan-300">
                  <motion.span
                    initial={{ width: "1rem" }}
                    whileHover={{ width: "1.5rem" }}
                    className="h-[1px] bg-slate-600 transition-all duration-300 group-hover:bg-cyan-400"
                  ></motion.span>
                  Metaverse Policy
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-between gap-6 border-t border-slate-700 pt-6 text-center sm:pt-8 lg:flex-row lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs sm:text-sm text-cyan-200"
          >
            ©2024 Infinity Metaverse. Pioneering the Future of Digital Reality.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group flex items-center rounded-full bg-cyan-900/30 px-4 py-2 sm:px-6 transition-all duration-300 hover:bg-cyan-800/40"
          >
            <SiEpicgames className="mr-2 sm:mr-3 text-lg sm:text-xl text-cyan-300" />
            <span className="text-xs sm:text-sm font-medium text-cyan-200">Access the Virtual Universe</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
