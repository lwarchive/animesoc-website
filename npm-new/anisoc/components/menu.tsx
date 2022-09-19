import menuData from "./data/menu.json";

interface MenuItemProps {
  menuItem: { id: string; name: string; icon: string };
}

function MenuItem(props: MenuItemProps) {
  const scrollTo = (element: string) => {
    var targetPosition = document.getElementById(element);
    if (targetPosition == null) {
      console.log("Cannot find " + element);
      return;
    }
    targetPosition.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="menu-item"
        onClick={() => {
          scrollTo(props.menuItem.id);
        }}
      >
        {props.menuItem.name}
      </div>
    </>
  );
}

function Menu() {
  return (
    <>
      <div className="menu -scale-y-0 lg:visible lg:scale-100 transition-all duration-200 origin-top">
        {menuData.menuItems.map((item, index) => {
          return <MenuItem key={index} menuItem={item} />;
        })}
      </div>
    </>
  );
}

export default Menu;
