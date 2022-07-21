import '../index.css';

const menuitems = ["About", "Join Us", "Events", "Polls", "Gallery", "Committee"];

function MenuItem(name) {

    const scrollto = (element) => {
        var targetPosition = document.getElementById(element);
        targetPosition.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <div className="menu-item">
                {name}
            </div>
        </>
    );
}

function Menu() {
    return (
        <>
            <div className="menu">
                
            </div>
        </>
    );
}

export default Menu;