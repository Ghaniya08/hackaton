import React, { ChangeEvent } from 'react';
type SearchBarProps = {
  products: any[]; // Accept products as an array
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};
const SearchableProductList: React.FC<SearchBarProps> = ({ handleSearch, searchQuery }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search Products..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar flex gap-2 justify-between px-[50px] w-[236px] h-[40px] border py-2 text-gray-500" 
      />
      <div>
      
      </div>
    </div>
  );
};

export default SearchableProductList;
