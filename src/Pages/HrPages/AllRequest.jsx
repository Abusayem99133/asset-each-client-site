const AllRequest = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Asset Name</th>
              <th>Asset Type</th>
              <th>Email of Requester</th>
              <th>Name of Requester</th>
              <th>Request Date</th>
              <th>Additional note</th>
              <th>Status</th>
              <th>Approve Button</th>
              <th>Reject Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>sayem99133gmail.com</td>
              <td>Md Rokonuzzaman Sayem</td>
              <td>20/07/2025</td>
              <td>This system is ok</td>
              <td>Pending</td>
              <td>Approve</td>
              <td>Reject</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRequest;
