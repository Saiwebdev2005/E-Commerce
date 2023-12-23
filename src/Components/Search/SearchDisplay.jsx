import Card from "../UI/Card";
export default function SearchDisplay({ searchTerm, handleChange, handlePriceRangeChange, priceRange, searchResults, addToCart }) {
  return (
    <div className='w-full bg-c2'>
    <div className='max-w-6xl bg-c4 mx-auto p-12'>
      <div className="container mx-auto px-4">
        <form onSubmit={(e) => e.preventDefault()} className="mb-4 flex justify-between">
          <input
            type="text"
            className="w-full rounded-md p-2 text-c1 bg-c3 placeholder:text-c1"
            placeholder="Search for clothes..."
            value={searchTerm}
            onChange={handleChange}
          />
          <select value={priceRange} onChange={handlePriceRangeChange} className="ml-4 bg-c2 text-c1 font-sans">
            <option value="all">All prices</option>
            <option value="300-500">600 - 1000</option>
            <option value="600-1000">300 - 500</option>
          </select>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {searchResults.length > 0 ? (
            searchResults.map((data, index) => (
              data && <Card 
                key={index}
                image={data.image} 
                title={data.title} 
                description={data.description} 
                gender={data.gender}
                price={data.price}
                className="w-full h-48 object-cover"
                onButtonClick={() => addToCart(data)}
              />
            ))
          ) : (
            <p>Oops, search different</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
