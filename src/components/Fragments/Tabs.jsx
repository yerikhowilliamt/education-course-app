import List from "../Elements/List/List";

const Tabs = () => {
  const data = [{id: 1, name: "Semua Kelas"}, {id: 2, name: "Pemasaran"}, {id: 3, name: "Desain"}, {id: 4, name: "Pengembangan Diri"}, {id: 5, name: "Bisnis"}]
  
  return (
      <ul className="w-full h-[50px] flex justify-start items-start scrollbar-hide overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
        {data.map((item) => (
          <List key={item.id} classname="nav h-[46px] flex items-start gap-1.5 py-3 pl-0 pr-9 md:text-body-medium text-body-small">{item.name}</List>
        ))}
      </ul>
  );
};

export default Tabs;
