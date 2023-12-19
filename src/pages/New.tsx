import "../styles/pages/new.scss";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useEmployees } from "../context/employeContext";
import { formatDate } from "../utils/date";
import { states } from "../config/state";
import Modal from "vz-react-modal";

const New = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [birthday, setBirthDay] = useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const { addNewEmployee } = useEmployees();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObject: any = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    if (startDate && birthday) {
      formDataObject.startDate = formatDate(startDate);
      formDataObject.birthday = formatDate(birthday);
    }
    addNewEmployee(formDataObject);
    setIsOpen(true);
    e.currentTarget.reset();
  };

  return (
    <div className="new-container">
      <a href="/employee/list" className="link">
        View Current Employees
      </a>
      <h2>Create Employee</h2>

      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="first-name">First Name</label>
          <input required type="text" id="first-name" name="firstName" />
        </div>

        <div className="input-container">
          <label htmlFor="last-name">Last Name</label>
          <input required type="text" id="last-name" name="lastName" />
        </div>

        <div className="input-container">
          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            selected={birthday}
            onChange={(date) => setBirthDay(date)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            required
          />
        </div>
        <legend>Address</legend>

        <div className="address">
          <div className="input-container">
            <label htmlFor="street">Street</label>
            <input id="street" type="text" name="street" />
          </div>

          <div className="input-container">
            <label htmlFor="city">City</label>
            <input required id="city" type="text" name="city" />
          </div>
          <div className="input-container">
            <label htmlFor="state">State</label>
            <select required name="state" id="state">
              {states?.map((state: Record<string, any>, index: number) => (
                <option value={state.name} key={index}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="zip-code">Zip Code</label>
            <input required id="zip-code" type="number" name="zipCode" />
          </div>
        </div>

        <div className="input-container">
          <label htmlFor="department">Department</label>
          <select required name="department" id="department">
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="engineering">Engineering</option>
            <option value="human-resources">Human Resources</option>
            <option value="legal">Legal</option>
          </select>
        </div>

        <button className="save-button" type="submit">
          Save
        </button>
      </form>

      <Modal
        modalTitle=""
        modalMessage="Le nouveau employee a bien été crée !"
        modalType="info"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default New;
