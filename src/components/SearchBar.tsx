"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [inputText, setInputText] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([
    "Tufts University",
    "Harvard University",
    "Massachusetts Institute of Technology",
    "Boston University",
    "Northeastern University",
  ]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const options: string[] = [
    "Tufts University",
    "Harvard University",
    "Massachusetts Institute of Technology",
    "Boston University",
    "Northeastern University",
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setInputText(query);

    // Filter the options based on the input text
    const newFilteredOptions = options.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredOptions(newFilteredOptions);

    // Show the dropdown only if there's input
    setShowDropdown(query.length > 0);
  };

  const handleOptionClick = (option: string) => {
    setInputText(option); // Set the input value to the clicked option
    setShowDropdown(false); // Hide the dropdown after selection
  };

  return (
    <div className="flex flex-col items-center">
      {/* Input container with icon */}
      <div className="relative w-72">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)} // Show dropdown on input focus
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Delay hiding dropdown to allow clicking options
          className="p-2 pl-10 border-2 border-blue-300 bg-blue-900 rounded-lg mb-3 w-full text-white placeholder-gray-400"
          placeholder="Type to search"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Dropdown menu */}
      {showDropdown && filteredOptions.length > 0 && (
        <div className="bg-blue-900 border-2 border-blue-300 rounded-b-lg shadow-lg w-72 max-h-40 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-blue-300 text-white hover:text-blue-950"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {/* No options message */}
      {showDropdown && filteredOptions.length === 0 && (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg w-72 p-2 text-gray-500">
          No options found
        </div>
      )}

      {/* Button */}
      <button className="bg-blue-300 font-bold p-3 rounded-lg text-xl border-2 border-blue-300 text-blue-950 hover:text-blue-300 hover:bg-blue-950 duration-500 mt-4">
        Select College
      </button>
    </div>
  );
};

export default SearchBar;
