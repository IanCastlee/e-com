import React from 'react';

function createMotionComponent(Tag) {
  const MotionComponent = React.forwardRef(function MotionElement(
    {
      initial,
      animate,
      exit,
      transition,
      whileHover,
      whileTap,
      variants,
      layout,
      className = '',
      children,
      ...rest
    },
    ref
  ) {
    return (
      <Tag ref={ref} className={`transition-all duration-300 ease-out ${className}`} {...rest}>
        {children}
      </Tag>
    );
  });
  MotionComponent.displayName = `motion.${String(Tag)}`;
  return MotionComponent;
}

export const motion = new Proxy(
  {},
  {
    get(target, prop) {
      if (!target[prop]) {
        target[prop] = createMotionComponent(prop);
      }
      return target[prop];
    },
  }
);

export function AnimatePresence({ children }) {
  return <>{children}</>;
}

export default { motion, AnimatePresence };
