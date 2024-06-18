import MainLayout from "../components/Layouts/MainLayouts";

const ErrorPage = () => {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-2xl font-bold">
            <span className="text-red-600">ERROR</span> ||{" "}
            <span className="text-red-600">404 Not Found</span>
          </h1>
        </div>
      </MainLayout>
    </>
  );
};

export default ErrorPage;
