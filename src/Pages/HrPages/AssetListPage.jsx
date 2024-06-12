import {
  FaBook,
  FaBookmark,
  FaEdit,
  FaSearch,
  FaTrashAlt,
  FaUser,
} from "react-icons/fa";

const AssetListPage = () => {
  return (
    <div>
      {/* TODO: filter in the available/ out of stock and asset type returnable/nonreturnable */}
      <label className="input input-bordered flex items-center gap-2 w-1/4 my-4">
        <input type="text" className="grow" placeholder="Search" />
        <FaSearch></FaSearch>
      </label>
      {/* TODO:top of the page sort product */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Type</th>
              <th>Product Quantity</th>
              <th>Date Added</th>
              <th>Update Button</th>
              <th>Delete Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>20/5/25</td>
              <td className="btn bg-blue-500 mr-6">
                <FaEdit className="text-white text-2xl "></FaEdit>
              </td>
              <td className="btn  bg-red-600">
                {" "}
                <FaTrashAlt className="text-white" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetListPage;
