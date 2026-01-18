import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';


const AuthLayout = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'auto',
        zIndex: 10 
      }}
    >
      <Outlet />
    </motion.div>
  );
};

export default AuthLayout;