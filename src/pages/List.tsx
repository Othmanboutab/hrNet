import DataTable from "react-data-table-component";
import { useEmployees } from "../context/employeContext";
import "../styles/pages/list.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const List = () => {
  const { employeesList, removeEmployee } = useEmployees();

  const columns = [
    {
      name: "FirstName",
      selector: (row: any) => row.firstName,
    },
    {
      name: "LastName",
      selector: (row: any) => row.lastName,
    },
    {
      name: "Birthday",
      selector: (row: any) => row.birthday,
    },
    {
      name: "Street",
      selector: (row: any) => row.street,
    },
    {
      name: "City",
      selector: (row: any) => row.city,
    },
    {
      name: "State",
      selector: (row: any) => row.state,
    },
    {
      name: "Zip code",
      selector: (row: any) => row.zipCode,
    },
    {
      name: "Department",
      selector: (row: any) => row.department,
    },
    {
      name: "Start date",
      selector: (row: any) => row.startDate,
    },
    {
      cell: (row: any) => (
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => removeEmployee(row.lastName)}
        />
      ),
      allowoverflow: true,
      button: true,
      width: "56px",
    },
  ];

  return (
    <div className="list-container">
      <h1>Current Employees</h1>
      <DataTable
        highlightOnHover
        pointerOnHover
        columns={columns}
        data={employeesList}
      />
    </div>
  );
};

export default List;
