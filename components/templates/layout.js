import Section from './Section';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Section />
      <Footer />
    </div>
  );
};

export default Layout;
