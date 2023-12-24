import { formatCurrency } from '@/utils/formatCurrency';

function Card({id, image, title, description, gender, onButtonClick,price}) {
 
  const handleClick = () => {
    const cardData = {id, image, title, description, gender,price};
    onButtonClick(cardData);
  }

  return (
    <div key={id} className="max-w-xs sm:max-w-sm md:max-w-sm rounded overflow-hidden shadow-lg m-4 bg-c3 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-32 md:h-64 object-cover" src={image} alt={title} />
      <div className="px-4 sm:px-6 py-2 sm:py-4">
        <div className="text-c2 text-lg md:text-2xl font-bold mb-2">{title}</div>
        <p className="text-xs md:text-sm text-c1">{description}</p>
        <p className='text-c2 text-xl mt-3 font-medium'>
          {/* price should be passes inside instead of 100 */}
          {formatCurrency(price)}
        </p>
       
      </div>
      <div className="px-4 sm:px-6 pt-2 sm:pt-4 pb-2 flex justify-end">
        <button onClick={handleClick} className="w-full text-xs md:text-lg font-sans button transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">+ Add To Cart</button>
      </div>
    </div>
  )
}

export default Card
