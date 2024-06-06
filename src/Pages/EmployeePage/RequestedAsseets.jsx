import { FaSearch } from "react-icons/fa";

const RequestedAssets = () => {
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
              <th>Availability</th>
              <th>Request Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Returnable/Non-returnable</td>
              <td>Available/ Out of stock</td>
              {/* TODO: CONDITIONAL  if availability is out of stock the request button will be disabled. */}
              {/* TODO: modal er shathy shathy date o dekhatey hby jakhon register kori takhon  er date */}
              <button className="btn btn-primary">Request</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedAssets;
