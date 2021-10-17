import { data } from "../../utils/cities.js";
import { Dropdown } from "reactjs-dropdown-component";

export default function Cities() {
  let onChange = (item, name) => {
    console.log(item, name);
  };
  return (
    <Dropdown
      name="location"
      title="Select location"
      list={data.cities}
      select={{ value: "325361" }}
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
