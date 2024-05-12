const MyRecommendations = () => {
  return (
    <div>
      <section className="dark:bg-gray-900">
        <div className=" container mx-auto md:px-0 px-4 py-10 md:py-20">
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
                <tr>
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
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                      </div>
                    </div>
                  </td>
                  <td>Zemlak, Daniel and Leannon</td>

                  <th>
                    <button className="btn btn-ghost btn-xs bg-red-700 text-white">
                      details
                    </button>
                  </th>
                </tr>
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyRecommendations;
