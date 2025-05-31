const PageSection = () => {
  
    
    const pageList = [
        { name: "Preview", path: "/preview" },
        { name: "1", path: "/" },
        { name: "2", path: "/page2" },
        { name: "3", path: "/page3" },
        { name: "4", path: "/page4" },
        { name: "5", path: "/page5" },
        { name: "6", path: "/page6" },
        { name: "7", path: "/page7" },
        { name: "Next", path: "/next"},
    ]
    console.log(pageList)
   
   return (
        <ul className="flex gap-4 justify-center items-center h-[40px] ">
        {pageList.map(link => (
          <li className="text-sm text-[#667085] rounded-[4px] border-[1px] border-[#F3F3F3] p-[10px] gap-[10px]" key={link.name}>
            <button>
            {link.name}</button>
          </li>
      ))}
    </ul>
  );
}

  

export default PageSection