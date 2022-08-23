import { useState } from "react";

const menuItems = [
  { id: "about", name: "About", icon: "person" },
  { id: "join-us", name: "Join Us", icon: "group_add" },
  { id: "events", name: "Events", icon: "event" },
  { id: "polls", name: "Polls", icon: "poll" },
  { id: "gallery", name: "Gallery", icon: "collections" },
  { id: "committee-members", name: "Committee", icon: "groups" },
];

function MenuItem(props: {
  menuItem: { id: string; name: string; icon: string };
  setState: any;
}) {
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
        className="mobile-menu-item flex flex-col items-center"
        onClick={() => {
          scrollTo(props.menuItem.id);
          props.setState(false);
        }}
      >
        <i className="material-icons">{props.menuItem.icon}</i>
        <span className="block">{props.menuItem.name}</span>
      </div>
    </>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        title="Menu"
        className={`lg:-scale-x-0 lg:-scale-y-0 scale-x-100 scale-y-100 fixed floating-menu bottom-10 right-8 mobile-menu w-20 h-20 rounded drop-shadow-lg flex justify-center items-center transition-all text-white text-4xl hover:bg-orange-700 origin-bottom-right duration-150 ${
          !open ? "scale-y-100 scale-x-100" : "-scale-y-0 -scale-x-0"
        }`}
      >
        <div className="space-y-2">
          <div className="w-8 h-0.5 bg-black"></div>
          <div className="w-8 h-0.5 bg-black"></div>
          <div className="w-8 h-0.5 bg-black"></div>
        </div>
      </button>
      <div
        className={`mobile-menu lg:invisible fixed floating-menu bottom-10 right-8 grid grid-cols-3 gap-3 rounded items-center p-6 drop-shadow-lg ${
          open ? "scale-y-100 scale-x-100" : "-scale-y-0 -scale-x-0"
        } duration-150 origin-bottom-right transition-all`}
      >
        {menuItems.map((item, index) => {
          return <MenuItem key={index} menuItem={item} setState={setOpen} />;
        })}
        <div
          className="mobile-menu-item flex flex-col items-center col-start-3"
          onClick={() => setOpen(!open)}
        >
          <i className="material-icons">close</i>
          <span className="block">Close</span>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
