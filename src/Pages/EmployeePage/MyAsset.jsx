import { FaSearch, FaTrash } from "react-icons/fa";

const MyAsset = () => {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2 border-blue-500 my-4  w-1/4">
        <input type="text" className="grow" placeholder="Search" />
        <FaSearch></FaSearch>
      </label>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Request Date</th>
              <th>Approval Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>20/6/25</td>
              <td>29/6/25</td>
              <td className="">
                <FaTrash className="bg-blue-500 text-red-700 text-4xl p-2"></FaTrash>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAsset;
