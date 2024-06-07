const AddAsset = () => {
  return (
    <div>
      <div className="flex gap-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product Type</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
      <div className="">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product Quantity</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered items-center"
          />
        </label>
      </div>
      <div className="btn btn-primary my-4 text-center">
        <input type="submit" value="Add Button" />
      </div>
    </div>
  );
};

export default AddAsset;
