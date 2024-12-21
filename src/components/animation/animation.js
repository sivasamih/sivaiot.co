export const NavAnimation = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    zIndex: 99999,
    transition: { duration: 0.8 },
  },
};
export const DrawerOpenCloseBtn = {
  hidden: { rotate: 90, opacity: 0 },
  visible: { rotate: 0, opacity: 1 },
  exit: { rotate: -90, opacity: 0 },
};

export const MenuListvariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

export const ListItemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};


export const Modalvariants = {
  hidden: {  opacity: 0, rotateY: 100 },
  visible: {opacity: 1, rotateY: 0 },
  exit: {  opacity: 0, rotateY: -100 },
};