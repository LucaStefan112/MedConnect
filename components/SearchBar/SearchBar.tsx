import type { ReactElement } from "react";
import React from "react";
import Home from "@/pages";
import SearchIcon from "@mui/icons-material/Search";

function handleClick() {}

export default function Searchbar() {
  let persons: string[] = ["Patient1", "Patient2", "Patient3"];
  let filters: string[] = [
    "All analyses",
    "Blood analyses",
    "Heart analyses",
    "Stomach analyses",
  ];

  return (
    <div className="">
      <form
        className={`
                grow flex flex-row items-center 
                shadow-md pl-4
                h-14 rounded-xl
                hover:cursor-pointer 
                bg-blue-50
            `}
      >
        <div>
          <select name="filters" id="filters">
            {filters.map((filter) => (
              <option value={filter}>{filter}</option>
            ))}
          </select>
        </div>

        <div>
          <select name="persons" id="persons">
            {persons.map((person) => (
              <option value={person}>{person}</option>
            ))}
          </select>
        </div>

        <input
          className="
                w-full h-full
                bg-blue-50
                outline-none
                text-blue-900 text-lg"
          placeholder="Search..."
        />
        <SearchIcon
          className="
                hover:bg-blue-100
                p-3 rounded-full;
                h-14 w-14
                rounded-xl        
                "
          color="primary"
        />
      </form>
    </div>
  );
}
