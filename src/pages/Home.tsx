import { ArrowRight, MessageSquare, Phone, Radio, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappNumber = '+51967016138';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/multimedia/video/video-magnavoz2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-magnavoz-dark/90 to-magnavoz-light/90" />
          </div>

          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/multimedia/img/logo-MAGNAVOZ-blanco_Mesa-de-trabajo-1-copia-2.png"
                alt="Magnavoz Logo"
                className="h-24 mb-8"
                loading="eager"
              />
              <h1 className="text-4xl font-bold tracking-tight text-magnavoz-background sm:text-5xl lg:text-6xl">
                Soluciones de comunicación inteligente
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-magnavoz-background">
                Somos una empresa que nace de la alianza de empresarios con más de 20 años de experiencia en la industria de las Telecomunicaciones.
                Creemos firmemente que la calidad es la base para la confianza y el crecimiento, y por eso nos esforzamos día a día para brindar el mejor servicio.
              </p>
              <div className="mt-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contactanos"
                    className="inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-magnavoz-green to-magnavoz-greenLight px-6 py-3 text-base font-medium text-magnavoz-background shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contáctanos
                    <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <ChevronDown className="h-8 w-8 text-magnavoz-background animate-bounce" />
            </motion.div> */}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-magnavoz-background py-24" ref={featuresRef}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-magnavoz-dark sm:text-4xl flex items-center justify-center gap-3">
                <Phone className="h-8 w-8 text-magnavoz-dark" />
                Nuestros Servicios Principales
              </h2>
              <p className="mt-4 text-lg text-magnavoz-dark">
                Soluciones completas para optimizar la comunicación de tu empresa
              </p>
            </motion.div>

            <motion.div
              className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              <Link to="/servicios">
                <motion.div
                  className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-magnavoz-gray cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <img
                    src="/multimedia/voice-ivr/voice-ivr.svg"
                    alt="Voice IVR"
                    className="w-full h-48 object-contain mb-6"
                  />
                  <h3 className="mt-6 text-xl font-semibold text-magnavoz-dark">Voice - IVR</h3>
                  <p className="mt-2 text-center text-magnavoz-dark">
                    Sistemas de respuesta de voz interactiva personalizados para tu negocio.
                  </p>
                </motion.div>
              </Link>

              <Link to="/servicios">
                <motion.div
                  className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-magnavoz-gray cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <img
                    src="/multimedia/sms-masivo/sms-masivo.svg"
                    alt="SMS Masivo"
                    className="w-full h-48 object-contain mb-6"
                  />
                  <h3 className="mt-6 text-xl font-semibold text-magnavoz-dark">SMS - Masivo</h3>
                  <p className="mt-2 text-center text-magnavoz-dark">
                    Alcance masivo con mensajes personalizados para tus clientes.
                  </p>
                </motion.div>
              </Link>

              <Link to="/servicios">
                <motion.div
                  className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-magnavoz-gray cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <img
                    src="/multimedia/voice-voip/voice-voip.svg"
                    alt="Voice VoIP"
                    className="w-full h-48 object-contain mb-6"
                  />
                  <h3 className="mt-6 text-xl font-semibold text-magnavoz-dark">Voice - VoIP</h3>
                  <p className="mt-2 text-center text-magnavoz-dark">
                    Soluciones avanzadas de telefonía IP para comunicaciones empresariales.
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}