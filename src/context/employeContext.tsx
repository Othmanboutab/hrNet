import { useState, createContext, useContext, useEffect } from "react";

const EmployeesContext = createContext<any>({
  employeesList: [],
});

const useEmployees = () => {
  return useContext(EmployeesContext);
};

const EmployeeContextProvider = ({ children }: any) => {
  const [employeesList, setEmployeeList] = useState<Employee[]>(
    JSON.parse(localStorage.getItem("employeeList") || "[]")
  );

  const addNewEmployee = (newEmploye: Employee) => {
    setEmployeeList((prev) => [...prev, newEmploye]);
  };

  const removeEmployee = (name: string) => {
    const index = employeesList.findIndex((e) => e.lastName === name);
    setEmployeeList([
      ...employeesList.slice(0, index),
      ...employeesList.slice(index + 1),
    ]);
  };

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employeesList));
  }, [employeesList]);

  return (
    <EmployeesContext.Provider
      value={{ employeesList, addNewEmployee, removeEmployee }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export { EmployeeContextProvider, useEmployees };
