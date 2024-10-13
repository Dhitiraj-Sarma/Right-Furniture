import { useEffect, useState } from "react";

function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./img/category/categories.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-3 py-5 px-2">
      {data.length > 0 &&
        data.map(({ name, image }, index) => (
          <div
            className="flex flex-col h-32 w-32 justify-center items-center p-3 rounded-full cursor-pointer bg-teal-100 hover:bg-teal-300 transition-colors duration-500"
            key={index}
          >
            <img src={image} alt={name} className="w-10 h-10" />
            <h1 className="text-sm font-bold text-nowrap py-2 text-center w-full">
              {name}
            </h1>
          </div>
        ))}
    </div>
  );
}

export default Category;
