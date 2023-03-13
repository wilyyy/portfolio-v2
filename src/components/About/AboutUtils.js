export const ScrollToSection = (reference, section) => {
   reference.current.scrollTo({
      top: section,
      behavior: "smooth",
   });
};

export const NavItems = {};
