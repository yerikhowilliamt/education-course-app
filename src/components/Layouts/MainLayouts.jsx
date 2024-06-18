const MainLayouts = ({ children, gap }) => {
  return (
    <main
      className={`w-screen min-h-screen bg-yellow-50 flex flex-col ${gap} justify-center items-center py-7 px-5 md:py-[64px] md:px-[120px] scroll-smooth`}
    >
      {children}
    </main>
  );
};

export default MainLayouts;
