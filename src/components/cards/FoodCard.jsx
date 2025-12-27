import React from 'react';

const FoodCard = ({ food }) => {
  return (
    <div className="group bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-xl dark:hover:shadow-orange-900/10 transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={food.foodImg} 
          alt={food.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-orange-400 shadow-sm border border-transparent dark:border-slate-700">
            {food.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 truncate">
          {food.title}
        </h3>
        
        <div className="flex items-center gap-1 mb-6">
          <span className="text-2xl font-black text-orange-500 dark:text-orange-400">
            ৳{food.price.toLocaleString('en-BD')}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 dark:shadow-none active:scale-95 transition-all text-sm">
            Add to Cart
          </button>
          <button className="w-full py-3 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400 font-semibold rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;