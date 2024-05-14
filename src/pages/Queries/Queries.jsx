import QueriesCard from "../../components/QueriesCard";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader/Loader";
const Queries = () => {
  // const loadedQueries = useLoaderData();
  const [loadedQueries, setLoadedQueries] = useState([]);
  const { loading } = useAuth();
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure();
  const [layout, setLayout] = useState(null);
  // Get Queries
  useEffect(() => {
    const getAllQueries = async () => {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_BASE_URL}/queries?search=${search}`
      );
      setLoadedQueries(data);
    };
    getAllQueries();
  }, [search]);

  // handleSearch
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  // handleChangeLayout
  const handleChangeLayout = (e) => {
    setLayout(parseInt(e.target.value));
  };
  if (loading) return <Loader />;
  return (
    <div>
      <section className=" dark:bg-gray-900">
        <div className="container mx-auto md:px-0 px-4 py-10 md:py-20">
          <div className="flex items-center py-5">
            <div className="  max-w-md mx-auto gap-1">
              <form onSubmit={handleSearch}>
                <div className="flex items-center gap-1">
                  <input
                    type="search"
                    name="search"
                    id="productName"
                    placeholder="Product Name"
                    className="w-full px-3 py-2  rounded-md border focus:outline-none dark:bg-gray-900 dark:text-color-overly dark:border-gray-800 dark:focus:border-color-primary"
                  />
                  <button
                    type="submit"
                    className=" px-4 py-3 font-semibold rounded-md bg-color-primary text-white"
                  >
                    <FaSearch />
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:flex">
              <select
                name="column"
                onChange={handleChangeLayout}
                id=""
                className="border border-color-primary focus:outline-none bg-color-primary text-white"
              >
                <option value="3">3 Column</option>
                <option value="2">2 Column</option>
              </select>
            </div>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-${
              layout ? layout : 2
            } lg:grid-cols-${layout ? layout : 3} gap-6`}
          >
            {loadedQueries?.map((qr) => (
              <QueriesCard key={qr._id} query={qr} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Queries;
