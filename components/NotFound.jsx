import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from '../sections/NotFound';

const NotFoundPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <NotFound />
    <Footer />
  </div>
);

export default NotFoundPage;
