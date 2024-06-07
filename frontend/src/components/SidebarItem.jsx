// eslint-disable-next-line react/prop-types
const SidebarItem = ({ content }) => {
  return (
    <div className="w-11/12 bg-sidebar-item p-1 my-1.5 rounded-full">
      <p className="mx-4 my-auto text-sm">{content}</p>
    </div>
  );
};

export default SidebarItem;
