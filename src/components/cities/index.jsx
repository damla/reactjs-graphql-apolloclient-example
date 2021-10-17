import { Dropdown } from "reactjs-dropdown-component";
import { useCities } from "../../contexts/CityContext";

export default function Cities() {
  const { cities, selectedCityId, setSelectedCityId } = useCities();

  let onChange = ({ value }) => {
    setSelectedCityId(value);
  };

  return (
    <Dropdown
      name="location"
      title="Select location"
      list={cities}
      select={{ value: selectedCityId }}
      onChange={onChange}
      styles={{
        wrapper: { width: "170px", fontSize: "1rem" },
        headerTitle: { margin: "2px 10px", marginRight: "20px" },
        list: { fontWeight: "300" },
        listItem: { fontSize: "0.9rem" },
        scrollList: { paddingTop: 0 },
      }}
    />
  );
}
