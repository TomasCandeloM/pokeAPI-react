import React from "react";

const SearchInput = ({onChange}) => (
    <input onChange={(e) => onChange(e.target.value)} type="text" placeholder="Buscar en el sitio web"/>
);

export default SearchInput;