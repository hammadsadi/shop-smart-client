import Hero from "../../components/Hero";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";
import QueriesCard from "../../components/QueriesCard";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader/Loader";
import TrandingQueries from "../../components/TrandingQueries";

const Home = () => {
  const loadedQueries = useLoaderData();
  const { loading } = useAuth();

  const bannerInfo = [
    {
      id: 1,
      title: "A Journey to Healthier Choices",
      image: "https://i.ibb.co/GWrf2hT/Fast-Food-Chicken-Sandwiches.jpg",
    },
    {
      id: 2,
      title: "Our Journey to Healthier Choices Begins Here!",
      image: "https://i.ibb.co/3ftLWBp/potato-chips.jpg",
    },
    {
      id: 3,
      title: "Empowering Healthier Choices and Inspired Palates",
      image: "https://i.ibb.co/WvDBv8N/iceream.jpg",
    },
  ];

  if (loading) return <Loader />;

  return (
    <div>
      {/* Hero Section */}
      <div>
        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className="mySwiper"
        >
          {bannerInfo.map((bn) => (
            <SwiperSlide key={bn.id}>
              {" "}
              <Hero banner={bn} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Recent Queries */}
      <section className=" dark:bg-gray-900">
        <div className="container mx-auto md:px-0 px-4 py-10 md:py-20">
          <div>
            <SectionTitle
              title={"Recent Queries"}
              subtitle={"You will see here the Recent Added Queries."}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadedQueries?.slice(0, 6).map((query) => (
              <QueriesCard key={query._id} query={query} />
            ))}
          </div>
        </div>
      </section>
      {/* Trending Queries */}
      <section className="dark:bg-gray-900 ">
        <div className="container pb-10 md:pb-20 ">
          <div>
            <SectionTitle
              title={"Trending Queries"}
              subtitle={"You will see here the Trending Queries."}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <TrandingQueries />
            <TrandingQueries />
            <TrandingQueries />
            <TrandingQueries />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
