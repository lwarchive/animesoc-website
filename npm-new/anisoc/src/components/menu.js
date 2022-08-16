import "../index.css";

const menuitems = [
  "About",
  "Join Us",
  "Events",
  "Polls",
  "Gallery",
  "Committee",
];

//TODO: make scrolling buttons work

function MenuItem(props) {
  const scrollto = (element) => {
    var targetPosition = document.getElementById(element);
    targetPosition.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="menu-item" onClick={scrollto}>
        {props.name}
      </div>
    </>
  );
}

function Menu() {
  return (
    <>
      <div className="menu -scale-y-0 lg:visible lg:scale-100 transition-all duration-200 origin-top">
        {menuitems.map((item, index) => {
          return <MenuItem key={index} name={item} />;
        })}
      </div>
    </>
  );
}

export default Menu;
