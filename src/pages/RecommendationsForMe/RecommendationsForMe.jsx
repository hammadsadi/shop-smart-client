import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const RecommendationsForMe = () => {
  const [userRecommendations, setUserRecommendations] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  useEffect(() => {
    const getRecommendation = async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_BASE_URL}/get-all-users-recommendations/${
          user?.email
        }`
      );
      setUserRecommendations(data);
    };
    getRecommendation();
  }, [axiosSecure, user]);

  console.log(userRecommendations);
  return (
    <div>
      <section className="dark:bg-gray-900">
        <div className=" container mx-auto md:px-0 px-4 py-10 md:py-20">
          <div>
            <SectionTitle title={"Recommendations For Me"} />
          </div>
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
                  <th>Photo & Query Title</th>
                  <th>Product Name</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {userRecommendations?.map((rec) => (
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
                    <td>{rec?.productName.slice(0, 20)}</td>
                    <td>{rec?.recommendationReason.slice(0, 20)}...</td>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecommendationsForMe;
