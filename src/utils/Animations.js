export const HoverZoom = {
   hover: { scale: 1.1 },
   tap: { scale: 0.95 },
   transition: { type: "spring", stiffness: 500 },
};

export const ModalInit = {
   hidden: {
      // y: "-50vh",
      scale: 0.6,
      opacity: 0,
   },
   visible: {
      // y: "0",
      scale: 1,
      opacity: 1,
      transition: {
         duration: 0.7,
         type: "spring",
         damping: 25,
         stiffness: 500,
      },
   },
   exit: {
      //
      scale: 0,
      opacity: 0,
   },
};
