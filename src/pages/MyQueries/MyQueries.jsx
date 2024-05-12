import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import SectionTitle from "../../components/SectionTitle";
import SingleQueryCard from "../../components/SingleQueryCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import swal from "sweetalert";

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

  const handleDeleteOwnQuery = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Do You Want to Delete This Query",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your Query has been deleted!", {
          icon: "success",
        });
        axiosSecure.delete(`/delete-query/${id}`);
        const remainigQuery = myQueries.filter((qr) => qr._id !== id);
        setQueries(remainigQuery);
      } else {
        swal("Your Query is safe!");
      }
    });
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
          {myQueries?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myQueries?.map((qr) => (
                <SingleQueryCard
                  key={qr._id}
                  query={qr}
                  handleDeleteOwnQuery={handleDeleteOwnQuery}
                />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="md:text-2xl text-lg font-medium dark:text-white mb-3">
                Query Not Found
              </h2>
              <Link to="/add-query">
                <button className="bg-color-primary py-2 px-8 rounded-md text-base md:text-lg font-semibold text-white">
                  Add Query
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyQueries;
