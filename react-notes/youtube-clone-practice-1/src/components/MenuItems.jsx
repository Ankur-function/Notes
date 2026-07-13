const MenuItems = () => {
    return (
        <div className="sidebar">
            <ul className="menu-list">
                <li className="menu-item active">Home</li>
                <li className="menu-item">Shorts</li>
            </ul>

            <h4 className="sidebar-heading">Subscriptions</h4>
            <ul className="menu-list">
                <li className="menu-item">Music</li>
                <li className="menu-item">Sports</li>
                <li className="menu-item">Gaming</li>
                <li className="menu-item">Movies</li>
            </ul>

            <h4 className="sidebar-heading">Watch Later</h4>
            <ul className="menu-list">
                <li className="menu-item">Music</li>
                <li className="menu-item">Sports</li>
                <li className="menu-item">Gaming</li>
                <li className="menu-item">Movies</li>
            </ul>
        </div>
    )
}

export default MenuItems;
