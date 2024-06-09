import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-5xl font-bold  my-2 mx-auto mt-60">404</h1>
        <h2 className="text-5xl font-bold text-center my-2 mx-auto">
          Page Not Found
        </h2>
        <Link to="/">
          <button className=" border-b-4  border bg-blue-500 py-2 px-2 rounded-2xl text-white my-2 mx-auto ">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
