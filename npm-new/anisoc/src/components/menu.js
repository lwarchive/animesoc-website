import '../index.css';

const menuitems = ["About", "Join Us", "Events", "Polls", "Gallery", "Committee"];

//TODO: make scrolling buttons work

function MenuItem(props) {

    const scrollto = (element) => {
        var targetPosition = document.getElementById(element);
        targetPosition.scrollIntoView({behavior: 'smooth'});
    }

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
            <div className="menu">
            {menuitems.map((item, index)=>{
                return <MenuItem key={index} name={item} />
            })}
            </div>
        </>
    );
}

export default Menu;