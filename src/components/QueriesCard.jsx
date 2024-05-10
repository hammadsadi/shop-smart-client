const QueriesCard = () => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
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

      <div className="bg-white p-4 sm:p-6">
        <h3 className="mt-0.5 text-xl md:text-2xl text-black font-bold">
          How to position your furniture
        </h3>
        <h3 className="mt-0.5 text-base font-medium md:text-lg text-black ">
          How to position your
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-color-overly">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
      <div className="flex gap-2 p-4 sm:p-6">
        <img
          src="https://i1.sndcdn.com/avatars-jRXwcAeJYYa5np7a-EGDQqA-t500x500.jpg"
          alt=""
          className="w-8 h-8 items-center border-2 border-color-primary rounded-full"
        />
        <div>
          <h3 className="text-base font-semibold">Hammad Sadi</h3>
          <time
            dateTime="2022-10-10"
            className="block text-xs text-color-overly"
          >
            {" "}
            Post: 10th Oct 2022{" "}
          </time>
        </div>
      </div>
    </article>
  );
};

export default QueriesCard;
