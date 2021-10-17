import { Dropdown } from "reactjs-dropdown-component";
import { useCities } from "../../contexts/CityContext";

export default function Cities() {
  // hook for pulling cities and selected city information
  const { cities, selectedCityId, setSelectedCityId } = useCities();

  // custom dropdown styles
  const dropDownStyles = {
    wrapper: { width: "300px", fontSize: "1rem" },
    header: {
      borderRadius: "0",
      border: "unset",
      borderBottom: "1px solid #e0dddd",
    },
    headerTitle: { margin: "2px 10px", marginRight: "20px" },
    list: { fontWeight: "300" },
    listItem: { fontSize: "0.9rem" },
    scrollList: { paddingTop: 0 },
  };

  let onChange = ({ value }) => {
    // set selected city id on dropdown change event
    setSelectedCityId(value);
  };

  return (
    <Dropdown
      name="location"
      title="Select location"
      list={cities}
      select={{ value: selectedCityId }}
      onChange={onChange}
      styles={dropDownStyles}
    />
  );
}
