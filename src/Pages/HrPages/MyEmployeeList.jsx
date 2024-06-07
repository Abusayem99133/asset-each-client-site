const MyEmployeeList = () => {
  return (
    <div>
      <div>
        {/* TODO:  this section use to all company member details */}
        <h1 className="text-center text-4xl text-blue-500">This is My Team</h1>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            {/* TODO: image of member */}
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            {/* TODO:name of member */}
            <h2 className="card-title">Name: Sayem</h2>
            <h2>Member Type:Hr/Employee</h2>

            {/* TODO: create a delete operation and decreased the one by one member */}

            <input
              className=" btn  btn-primary"
              type="submit"
              value="Remove Team"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEmployeeList;
