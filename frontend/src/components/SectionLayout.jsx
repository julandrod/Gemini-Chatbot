import Footer from "./Footer";
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const SectionLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className=" flex bg-main-bg items-center justify-center pt-20 md:px-10 md:pt-24 md:pb-16 mx-auto md:relative z-0 text-white">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default SectionLayout;
