import { useState } from "react"

const FilterButtons = () => {
    const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'Music',
    'Gaming',
    'Live',
    'Computer Science',
    'Podcasts',
    'Cooking',
    'Recently uploaded',
    'Watched',
    'New to you'
  ];

  return (
    <div className="flex items-center space-x-2 overflow-x-auto py-4 px-4 hide-scrollbar">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
            activeFilter === filter
              ? 'bg-black text-white dark:bg-red-500 dark:text-black'
              : 'bg-gray-100 text-white hover:bg-red-300 dark:bg-white dark:text-black dark:hover:bg-amber-100'
          }`}
        >
          <h1 className="border rounded-full px-3 py-1">{filter}</h1>
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
