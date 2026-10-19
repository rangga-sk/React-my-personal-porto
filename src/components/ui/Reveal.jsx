import { motion } from 'framer-motion';

export default function Reveal({ as = 'div', delay = 0, y = 24, children, ...props }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  );
}
