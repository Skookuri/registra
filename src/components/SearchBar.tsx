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
    <div className="flex flex-row items-center justify-center">
      <div className="relative">
        {/* Input container with icon */}
        <div className="relative w-72">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onFocus={() => setShowDropdown(true)} // Show dropdown on input focus
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Delay hiding dropdown to allow clicking options
            className="p-2 pl-10 border-2 border-blue-300 bg-blue-900 rounded-t-lg w-full text-white placeholder-blue-400"
            placeholder="Type to search"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
        </div>

        {/* Dropdown menu */}
        <div
          className={`absolute top-full w-72 border-2 border-t-0 border-blue-300 bg-blue-900 rounded-b-lg shadow-lg max-h-40 overflow-y-auto transition-opacity duration-200 ${
            showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer hover:bg-blue-300 text-white hover:text-blue-950"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="p-2 text-blue-400">No options found</div>
          )}
        </div>
      </div>

      {/* Button */}
      <button className="bg-blue-300 font-bold p-2 rounded-lg text-xl border-2 border-blue-300 text-blue-950 hover:text-white hover:bg-blue-950 duration-500 ml-4">
        Select College
      </button>
    </div>
  );
};

export default SearchBar;
