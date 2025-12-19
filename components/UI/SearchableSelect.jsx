import React from "react"
import Select from "react-select"

const SearchableSelect = ({ options, value, onChange, placeholder }) => {
    const selectedOption = options?.find((option) => option.value === value?.value)

    return (
        <Select
            value={selectedOption}
            onChange={(newValue) => onChange(newValue)}
            options={options}
            placeholder={placeholder}
            className="react-select-container cursor-pointer"
            classNamePrefix="react-select"
        />
    )
}

export default SearchableSelect

