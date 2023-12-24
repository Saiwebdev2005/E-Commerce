import { useEffect } from 'react';
import Card from "../UI/Card";

export default function SearchDisplay({
  searchTerm,
  handleChange,
  handlePriceRangeChange,
  priceRange,
  searchResults,
  addToCart,
}) {
  // Update searchTerm when the component mounts
  useEffect(() => {
    handleChange({ target: { value: 'Hoodie' } });
  }, []);

  return (
    <div className="w-full bg-c1 h-fit">
      <div className="max-w-6xl  mx-auto p-12 h-full">
        <div className="container relative mx-auto px-4 h-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mb-4 flex justify-between"
          >
            <input
              type="text"
              className="w-full rounded-md p-2 text-c2 bg-c1 border-2 placeholder:text-c3"
              placeholder="Search for clothes..."
              value={searchTerm}
              onChange={handleChange}
            />
            <select
              value={priceRange}
              onChange={handlePriceRangeChange}
              className="ml-4 rounded-lg bg-c2 text-c1 "
            >
              <option value="all">All prices</option>
              <option value="300-500">600 - 1000</option>
              <option value="600-1000">300 - 500</option>
            </select>
          </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {searchResults.length > 0 ? (
              searchResults.map(
                (data, index) =>
                  data && (
                    <Card
                      key={index}
                      image={data.image}
                      title={data.title}
                      description={data.description}
                      gender={data.gender}
                      price={data.price}
                      className="w-full h-48 object-cover"
                      onButtonClick={() => addToCart(data)}
                    />
                  )
              )
            ) : (
              <div className=" h-screen">
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold text-c2">
                  Oops, search different
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
