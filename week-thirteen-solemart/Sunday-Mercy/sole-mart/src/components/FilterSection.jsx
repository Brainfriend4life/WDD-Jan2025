import { MdKeyboardArrowDown } from "react-icons/md";

const FilterSection = () => {
    

    const filterList = [
        { name: "Shoe type", path: "/type" },
        { name: "Price", path: "/price" },
        { name: "Size Selection", path: "/size" },
        { name: "Color", path: "/color" },
        { name: "Material", path: "/material" },
        { name: "Brand", path: "/brand" },
    ];

    return (
        <ul className="flex gap-8 justify-center items-center h-[60px]  my-[20px]">
                {filterList.map(link => (
                    <li className="text-sm font-[500] " key={link.name}>
                        <button className="flex  justify-center items-center gap-2 py-[10px] px-[14px]  h-[41px] rounded-[28px] bg-[#EBEDEC] gap-[7px]">
                            {link.name} <MdKeyboardArrowDown /> </button>
                    </li>
                )
                )}
            </ul>     
    )
}

export default FilterSection