const Recommendation = () => {
  return (
    <div>
      <div className="flex gap-3 md:gap-6 items-center">
        <img
          src="https://i1.sndcdn.com/avatars-jRXwcAeJYYa5np7a-EGDQqA-t500x500.jpg"
          alt=""
          className="w-10 h-10 md:w-16 md:h-16 border-2 border-color-primary rounded-full"
        />
        <div className="">
          <h2 className="font-bold text-lg md:text-xl dark:text-white">
            Leroy Jenkins
          </h2>
          <p className="text-color-overly dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            voluptates voluptatibus ut officia sunt exercitationem, esse debitis
            unde? Iure, doloribus eaque. Natus maiores id facilis, architecto in
            debitis? Sapiente, fuga?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
