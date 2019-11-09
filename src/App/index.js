import React, { useState } from "react";

import "./index.css";
import Table from "./components/Table";
import getAge from "./utils/getAge";
import {
  finalTableColumns,
  qualificationsTableColumns
} from "./constants/tables";
import TextInput from "./components/TextInput";

export default function App() {
  const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem("tableData"))
      ? JSON.parse(localStorage.getItem("tableData"))
      : []
  );
  const [categoryNo, setCategoryNo] = useState("");
  const [applicationFor, setApplicationFor] = useState("");
  const [isScps, setIsScps] = useState(false);
  const [isSara, setIsSara] = useState(false);
  const [dcpu, setDcpu] = useState("Alappuzha");
  const [jjb, setJjb] = useState("Alappuzha");
  const [ch, setCh] = useState("Alappuzha");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(0);
  const [father, setFather] = useState("");
  const [residence, setResidence] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setexperience] = useState("");
  const [qualificationsData, setqualificationsData] = useState([
    {
      course: "S.S.L.C",
      institution: "",
      regNo: "",
      yearOfPass: "",
      marks: "",
      remarks: ""
    },
    {
      course: "Pre-Degree/+2",
      institution: "",
      regNo: "",
      yearOfPass: "",
      marks: "",
      remarks: ""
    }
  ]);

  return (
    <div className="container mt-5 bg-light">
      <TextInput
        label={`Category No`}
        value={categoryNo}
        onChange={setCategoryNo}
      />
      <h4 className="text-center mt-3">
        Women And Child Development Department Integrated Child Protection
        Scheme [ICPS]
      </h4>
      <TextInput
        longInput
        label={`Application for the Post of`}
        value={applicationFor}
        onChange={setApplicationFor}
      />
      <div className="row mt-3 d-flex align-items-center">
        <input
          className="mr-1"
          type="checkbox"
          checked={isScps}
          onChange={e => setIsScps(e.target.checked)}
        />
        SCPS
        <input
          className="mr-1 ml-3"
          type="checkbox"
          checked={isSara}
          onChange={e => setIsSara(e.target.checked)}
        />
        SARA
        <div className="col text-center">
          DCPU (Specify Dist)
          <select
            value={dcpu}
            onChange={e => setDcpu(e.target.value)}
            className="ml-2"
          >
            <option value="Alappuzha">Alappuzha</option>
            <option value="Ernakulam">Ernakulam</option>
            <option value="Idukki">Idukki</option>
            <option value="Kannur">Kannur</option>
            <option value="Kasaragod">Kasaragod</option>
            <option value="Kollam">Kollam</option>
            <option value="Kottayam">Kottayam</option>
            <option value="Kozhikode">Kozhikode</option>
            <option value="Malappuram">Malappuram</option>
            <option value="Palakkad">Palakkad</option>
            <option value="Pathanamthitta">Pathanamthitta</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Thrissur">Thrissur</option>
            <option value="Wayanad">Wayanad</option>
          </select>
        </div>
        <div className="col text-center">
          JJ B/CWC (Specify Dist)
          <select
            value={jjb}
            onChange={e => setJjb(e.target.value)}
            className="ml-2"
          >
            <option value="Alappuzha">Alappuzha</option>
            <option value="Ernakulam">Ernakulam</option>
            <option value="Idukki">Idukki</option>
            <option value="Kannur">Kannur</option>
            <option value="Kasaragod">Kasaragod</option>
            <option value="Kollam">Kollam</option>
            <option value="Kottayam">Kottayam</option>
            <option value="Kozhikode">Kozhikode</option>
            <option value="Malappuram">Malappuram</option>
            <option value="Palakkad">Palakkad</option>
            <option value="Pathanamthitta">Pathanamthitta</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Thrissur">Thrissur</option>
            <option value="Wayanad">Wayanad</option>
          </select>
        </div>
        <div className="col text-center">
          CH/OH/POS (Specify Dist)
          <select
            value={ch}
            onChange={e => setCh(e.target.value)}
            className="ml-2"
          >
            <option value="Alappuzha">Alappuzha</option>
            <option value="Ernakulam">Ernakulam</option>
            <option value="Idukki">Idukki</option>
            <option value="Kannur">Kannur</option>
            <option value="Kasaragod">Kasaragod</option>
            <option value="Kollam">Kollam</option>
            <option value="Kottayam">Kottayam</option>
            <option value="Kozhikode">Kozhikode</option>
            <option value="Malappuram">Malappuram</option>
            <option value="Palakkad">Palakkad</option>
            <option value="Pathanamthitta">Pathanamthitta</option>
            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Thrissur">Thrissur</option>
            <option value="Wayanad">Wayanad</option>
          </select>
        </div>
      </div>
      <TextInput
        longInput
        toUpperCase
        label={`1. Name (Use Capital Letters Only)`}
        value={name}
        onChange={setName}
      />
      <div className="mt-4">
        2. Male/Female/TG (Specify):
        <select
          value={gender}
          onChange={e => setGender(e.target.value)}
          className="ml-2"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="TG">TG</option>
        </select>
      </div>
      <div className="mt-4">
        3. Age & Date of Birth:
        <input
          type="date"
          className="mx-2"
          value={dob}
          onChange={e => {
            setDob(e.target.value);
            setAge(getAge(e.target.value));
          }}
        />
        {`Age: ${age}`}
      </div>
      <TextInput
        longInput
        toUpperCase
        label={`4. Father's/Husband's Name`}
        value={father}
        onChange={setFather}
      />
      <div className="mt-4 d-flex align-items-center">
        5. Place of Residence (Proof to be attached):
        <textarea
          rows="3"
          className="ml-2 w-50"
          value={residence}
          onChange={e => setResidence(e.target.value)}
        />
      </div>
      <div className="d-flex align-items-center">
        <TextInput
          type="tel"
          label={`6. Phone / Mobile No: 1`}
          value={phone}
          onChange={setPhone}
        />
        <TextInput type="tel" label={`2`} value={mobile} onChange={setMobile} />
      </div>
      <TextInput
        longInput
        type="email"
        label={`7. e-mail Address`}
        value={email}
        onChange={setEmail}
      />
      <div className="mt-4 d-flex align-items-center">
        8. Permanent Address (With Pin code):
        <textarea
          rows="3"
          className="ml-2 w-50"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
      <div className="mt-4">
        9. Qualification (Use Additional Sheets if needed):
        <Table
          columns={qualificationsTableColumns(
            qualificationsData,
            setqualificationsData
          )}
          data={qualificationsData}
        />
      </div>
      <TextInput
        longInput
        label={`10. Experience`}
        value={experience}
        onChange={setexperience}
      />
      <button
        className="w-25 m-3 p-2"
        onClick={() => {
          const tempData = [
            ...tableData,
            {
              categoryNo,
              applicationFor,
              isScps,
              isSara,
              dcpu,
              jjb,
              ch,
              name,
              gender,
              dob,
              age,
              father,
              residence,
              phone,
              mobile,
              email,
              address,
              experience
            }
          ];
          localStorage.setItem("tableData", JSON.stringify(tempData));
          setTableData(tempData);
        }}
      >
        Save
      </button>
      <Table columns={finalTableColumns} data={tableData} />
    </div>
  );
}
