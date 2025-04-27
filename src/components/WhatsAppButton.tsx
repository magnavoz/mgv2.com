import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = '+51967016138';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <div className="relative flex items-center justify-center bg-white rounded-full p-2 ring-1 ring-green-500/50">
          <img
            src="/multimedia/wsp-icon/icono-wsp.svg"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </div>
      </div>
    </motion.a>
  );
}