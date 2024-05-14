import Hero from "../../components/Hero";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";
import QueriesCard from "../../components/QueriesCard";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader/Loader";
import TrandingQueries from "../../components/TrandingQueries";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TinyBanner from "../../components/TinyBanner";
import NewsLater from "../../components/NewsLater";
import { Fade } from "react-awesome-reveal";
const Home = () => {
  const loadedQueries = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const [trendingData, setTrendingData] = useState([]);
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

  // Get Queries
  useEffect(() => {
    const getAllQueries = async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_BASE_URL}/trending-queries`
      );
      setTrendingData(data);
    };
    getAllQueries();
  }, []);
  console.log(trendingData);

  if (loading) return <Loader />;

  return (
    <div>
      {/* Hero Section */}
      <div>
        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
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

      {/* Tiny Banner */}
      <section className=" dark:bg-gray-900">
        <div className="container mx-auto md:px-0 px-4 pb-10 md:pb-20">
          <TinyBanner />
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
            {trendingData?.slice(0, 6).map((tran) => (
              <TrandingQueries key={tran._id} trend={tran} />
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe News Later */}
      <section className="dark:bg-gray-900 pb-10 md:pb-20">
        <div className="container mx-auto md:px-0 px-4 py-10 md:py-20 bg-color-secondary dark:bg-gray-800">
          <Fade>
            <div className="space-y-2 max-w-md mx-auto text-center mb-4 md:mb-5 ">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white dark:text-white">
                Newsletter
              </h2>
              <p className="text-base text-white">Stay Updated</p>
            </div>
          </Fade>

          <NewsLater />
        </div>
      </section>
    </div>
  );
};

export default Home;
