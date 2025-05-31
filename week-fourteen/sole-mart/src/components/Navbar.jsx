const NavBar = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "Product Listing Page", path: "/products" },
        { name: "Sign Up", path: "/signup" },
    ];

    return (
        <nav className="py-8 px-10 flex justify-between items-center bg-white shadow-md">
            
            <div>
                <img src="/logo.png" alt="Logo" className="h-8" />
            </div>

            
            <ul className="flex gap-8">
                {navLinks.map(link => (
                    <li key={link.name} className="text-sm font-medium hover:text-blue-600 cursor-pointer">
                        {link.name}
                    </li>
                ))}
            </ul>

            
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="bg-transparent focus:outline-none px-2"
                />
                <img src="/Vector 1.png" alt="Search Icon" className="h-4 w-4" />
            </div>

           
            <div className="flex items-center gap-6 pl-10 ">
                <img src="/Vector 2.png" alt="User Icon" className="h-5 w-5" />
                <img src="/Cart 1.png" alt="Cart Icon" className="h-5 w-5" />
            </div>
        </nav>
    );
};

export default NavBar;