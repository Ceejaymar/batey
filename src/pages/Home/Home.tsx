import Header from '../../components/Header/Header';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import Quote from '../../components/Quote/Quote';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct';
import Subscribe from '../../components/Subscribe/Subscribe';
import Transition from '../../utils/transition';

function Home() {
  return (
    <Transition>
      <Header />
      <NewArrivals />
      <Quote />
      <FeaturedProduct />
      <Subscribe />
    </Transition>
  );
}

export default Home;
