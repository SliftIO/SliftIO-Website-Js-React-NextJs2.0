import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Insights, WhatsNew, World } from '../sections';
import NotFound from '../sections/NotFound';

const NotFoundPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <NotFound />
    <Footer />
  </div>
);

export default NotFoundPage;