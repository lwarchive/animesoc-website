import "../../index.css";

import { useState } from "react";

import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import EventIcon from "@mui/icons-material/Event";
import PollIcon from "@mui/icons-material/Poll";
import CollectionsIcon from "@mui/icons-material/Collections";
import CloseIcon from "@mui/icons-material/Close";

const menuItems = [
  { name: "About", icon: PersonIcon },
  { name: "Join Us", icon: GroupAddIcon },
  { name: "Events", icon: EventIcon },
  { name: "Polls", icon: PollIcon },
  { name: "Gallery", icon: CollectionsIcon },
  { name: "Committee", icon: GroupsIcon },
];

//TODO: make scrolling buttons work

function MenuItem(props) {
  const scrollto = (element) => {
    var targetPosition = document.getElementById(element);
    targetPosition.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="mobile-menu-item flex flex-col items-center"
        onClick={scrollto}
      >
        <props.menuItem.icon />
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
        class="lg:-scale-x-0 lg:-scale-y-0 scale-x-100 scale-y-100 fixed z-90 bottom-10 right-8 mobile-menu w-20 h-20 rounded drop-shadow-lg flex justify-center items-center transition-all text-white text-4xl hover:bg-orange-700"
      >
        <div class="space-y-2">
          <div class="w-8 h-0.5 bg-black"></div>
          <div class="w-8 h-0.5 bg-black"></div>
          <div class="w-8 h-0.5 bg-black"></div>
        </div>
      </button>
      <div
        className={`mobile-menu lg:invisible fixed z-90 bottom-10 right-8 grid grid-cols-3 gap-3 rounded items-center p-6 drop-shadow-lg ${
          open ? "scale-y-100 scale-x-100" : "-scale-y-0 -scale-x-0"
        } duration-150 origin-bottom-right transition-all`}
      >
        {menuItems.map((item, index) => {
          return <MenuItem key={index} menuItem={item} />;
        })}
        <div
          className="mobile-menu-item flex flex-col items-center col-start-3"
          onClick={() => setOpen(!open)}
        >
          <CloseIcon />
          <span className="block">Close</span>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
