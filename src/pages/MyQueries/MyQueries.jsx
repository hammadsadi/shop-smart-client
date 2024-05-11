import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import SectionTitle from "../../components/SectionTitle";
import SingleQueryCard from "../../components/SingleQueryCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const MyQueries = () => {
  const [myQueries, setQueries] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Get User Queries
  useEffect(() => {
    handleMyAddedQueries();
  }, [user]);

  // Get My Added Queries
  const handleMyAddedQueries = async () => {
    const { data } = await axiosSecure.get(`/user-query/${user?.email}`);
    setQueries(data);
  };
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section className=" dark:bg-gray-900">
        <div className="container mx-auto md:px-0 px-4 py-10 md:py-20">
          <div>
            <SectionTitle title={"My Queries"} subtitle={""} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myQueries?.map((qr) => (
              <SingleQueryCard key={qr._id} query={qr} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyQueries;
