import { FaPenSquare, FaTrashAlt, FaRegEye } from "react-icons/fa";

const SingleQueryCard = () => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:bg-gray-800">
      <div className="relative">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-56 w-full object-cover"
        />
        <div className="absolute right-2 bottom-2 bg-color-primary py-2 px-7 text-white rounded-tl-3xl rounded-br-3xl">
          <p className="text-base text-white font-medium">Brand Name</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6">
        <h3 className="mt-0.5 text-xl md:text-2xl text-black font-bold dark:text-white">
          How to position your furniture
        </h3>
        <h3 className="mt-0.5 text-base font-medium md:text-lg text-black dark:text-white">
          How to position your
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-color-overly dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
      <div className="flex gap-5 p-4 sm:p-6 justify-center">
        <button className="text-xl">
          {" "}
          <FaRegEye className="text-color-primary" />{" "}
        </button>
        <button className="text-lg">
          {" "}
          <FaPenSquare className="text-color-primary" />{" "}
        </button>
        <button className="text-lg">
          {" "}
          <FaTrashAlt className="text-color-primary" />{" "}
        </button>
      </div>
    </article>
  );
};

export default SingleQueryCard;
