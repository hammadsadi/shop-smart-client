import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import swal from "sweetalert";
import Loader from "../../components/Loader/Loader";
import { Fade } from "react-awesome-reveal";
const MyRecommendations = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const [recommendations, setRecommendations] = useState([]);
  // Get Recommendation
  useEffect(() => {
    const getRecommendation = async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_BASE_URL}/my-recommendation/${user?.email}`
      );
      setRecommendations(data);
    };
    getRecommendation();
  }, [axiosSecure, user]);

  // Handle Delete Own Recommendation
  const handleDeleteRecommendation = async (id, queryId) => {
    swal({
      title: "Are you sure?",
      text: "Do You Want to Delete This Recommendation",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your Recommendation has been deleted!", {
          icon: "success",
        });
        axiosSecure.delete(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/delete-recommendation/${id}?queryId=${queryId}`
        );
        const remainingRecomm = recommendations.filter((rec) => rec._id !== id);
        setRecommendations(remainingRecomm);
      } else {
        swal("Your Recommendation is safe!");
      }
    });
  };
  if (loading) return <Loader />;
  return (
    <div>
      <section className="dark:bg-gray-900">
        <div className=" container mx-auto md:px-0 px-4 py-10 md:py-20">
          <div>
            <SectionTitle title={"My Recommendation"} />
          </div>
          <Fade>
            <div className="overflow-x-auto">
              <table className="table dark:text-white">
                {/* head */}
                <thead>
                  <tr className="dark:text-white">
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox dark:text-white"
                        />
                      </label>
                    </th>
                    <th>Photo & Title</th>
                    <th>Reason</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {recommendations?.map((rec) => (
                    <tr key={rec._id}>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={rec?.recommendedProductImage}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              {rec?.recommendationTitle.slice(0, 20)}...
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{rec?.recommendationReason.slice(0, 20)}...</td>

                      <th>
                        <button
                          className="btn btn-ghost btn-xs bg-red-700 text-white hover:bg-gray-800"
                          onClick={() =>
                            handleDeleteRecommendation(rec._id, rec.queryId)
                          }
                        >
                          Delete
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
                {/* foot */}
              </table>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default MyRecommendations;
