import React, { useState } from "react";

import Table from "./components/Table";
import getAge from "./utils/getAge";
import {
  finalTableColumns,
  qualificationsTableColumns
} from "./constants/tables";
import TextInput from "./components/TextInput";
import SelectBox from "./components/SelectBox";
import CheckBox from "./components/CheckBox";

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
  const [dcpu, setDcpu] = useState("");
  const [jjb, setJjb] = useState("");
  const [ch, setCh] = useState("");
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
    <div className="bg-light">
      <div className="container p-3">
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
          <CheckBox label="SCPS" checked={isScps} onChange={setIsScps} />
          <CheckBox label="SARA" checked={isSara} onChange={setIsSara} />
          <SelectBox
            label="DCPU (Specify Dist)"
            value={dcpu}
            onChange={setDcpu}
          />
          <SelectBox
            label="JJ B/CWC (Specify Dist)"
            value={jjb}
            onChange={setJjb}
          />
          <SelectBox
            label="CH/OH/POS (Specify Dist)"
            value={ch}
            onChange={setCh}
          />
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
          <TextInput
            type="tel"
            label={`2`}
            value={mobile}
            onChange={setMobile}
          />
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
          <button
            onClick={() => {
              setqualificationsData([
                ...qualificationsData,
                {
                  course: "",
                  institution: "",
                  regNo: "",
                  yearOfPass: "",
                  marks: "",
                  remarks: ""
                }
              ]);
            }}
            className="btn btn-secondary"
          >
            + Add
          </button>
        </div>
        <TextInput
          longInput
          label={`10. Experience`}
          value={experience}
          onChange={setexperience}
        />
        <button
          className="w-25 m-3 p-2 btn btn-primary"
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
                qualificationsData,
                experience
              }
            ];
            localStorage.setItem("tableData", JSON.stringify(tempData));
            setTableData(tempData);
          }}
        >
          Save
        </button>
      </div>

      <div className="container py-5">
        <Table columns={finalTableColumns} data={tableData} />
      </div>
    </div>
  );
}
