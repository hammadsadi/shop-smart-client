import Banner from "../../components/Banner";
import SectionTitle from "../../components/SectionTitle";
import SingleQueryCard from "../../components/SingleQueryCard";

const MyQueries = () => {
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
            <SingleQueryCard />
            <SingleQueryCard />
            <SingleQueryCard />
            <SingleQueryCard />
            <SingleQueryCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyQueries;
