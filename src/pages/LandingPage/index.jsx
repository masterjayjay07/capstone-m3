import Footer from "../../components/footerLandingPage";
import Header from "../../components/header";
import LpStack1 from "../../components/lpstack1";
import Stack2 from "../../components/stack2";
import { motion } from "framer-motion";

import ScrollAnimation from "react-animate-on-scroll";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <main>
        <LpStack1 />
        <Stack2 />
        <Footer />
      </main>
    </motion.div>
  );
};

export default LandingPage;
