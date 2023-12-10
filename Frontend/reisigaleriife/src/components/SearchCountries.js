import React, { useState, useEffect } from "react";
import Select from "react-select";

const SearchCountries = () => {
  // State for managing search query
  const [searchQuery, setSearchQuery] = useState("");

  // State for storing API results
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Effect to fetch options from the API when searchQuery changes
  useEffect(() => {
    const fetchOptions = async () => {
      if (searchQuery.trim() !== "") {
        setLoading(true);
      }
      try {
        const response = await fetch(
          `http://localhost:8080/destinations?keyword=${searchQuery}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch options");
        }

        const data = await response.json();

        console.log(data);

        // Transform data to format expected by react-select
        const formattedOptions = data.map((item) => ({
          value: item.id,
          label: item.name,
        }));

        console.log(formattedOptions);

        setOptions(formattedOptions);
      } catch (error) {
        console.error("Error fetching options: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, [searchQuery]);

  // Event handler for selecting an option
  const handleSelectChange = (selectedOption) => {
    if (selectedOption) {
      window.location.href = `/reisipakkumised/${selectedOption.label}`;
    }
  };

  return (
    <div className="search">
      <Select
        className="search_bar"
        placeholder="Otsi reisi"
        options={options}
        onInputChange={(inputValue) => setSearchQuery(inputValue)}
        onChange={handleSelectChange}
        isLoading={loading}
        isClearable={true}
      />
      {loading && <p>Laeb...</p>}
    </div>
  );
};

export default SearchCountries;
