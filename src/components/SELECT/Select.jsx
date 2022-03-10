import styledComponents from "styled-components";

const SelectStyle = styledComponents.select`
margin-top: 1em;
padding: 1.2em;
text-transform: uppercase;
border-radius: 8px;
background-color: #445760;
border: 0.3em solid black;
`;

const Select = ({ onChange, name, id, options }) => {
  return (
    <div>
      <SelectStyle name={name} id={id} onChange={onChange}>
        {options.map((country) => {
          return (
            <option key={country.country} value={country.country}>
              {country.country}
            </option>
          );
        })}
      </SelectStyle>
    </div>
  );
};

export default Select;
