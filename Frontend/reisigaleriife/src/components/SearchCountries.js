import React, { useState, useEffect } from "react";
import Select from "react-select";

const SearchCountries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

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

        const formattedOptions = data.map((item) => ({
          value: item.id,
          label: item.name,
        }));

        setOptions(formattedOptions);
      } catch (error) {
        console.error("Error fetching options: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, [searchQuery]);

  const handleSelectChange = (selectedOption) => {
    if (selectedOption) {
      window.location.href = `/reisipakkumised/${selectedOption.value}`;
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
