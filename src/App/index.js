import React, { useState } from "react";
import { Parser } from "json2csv";

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
  const [referenceNo, setReferenceNo] = useState('')
  const [categoryNo, setCategoryNo] = useState("");
  const [applicationFor, setApplicationFor] = useState("");
  const [isScps, setIsScps] = useState(false);
  const [isSara, setIsSara] = useState(false);
  const [dcpu, setDcpu] = useState("");
  const [jjb, setJjb] = useState("");
  const [ch, setCh] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
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
        <h3>
          Women And Child Development Department Integrated Child Protection
          Scheme [ICPS]
        </h3>
        <TextInput
          label={`Reference No`}
          value={referenceNo}
          onChange={setReferenceNo}
        />
        <TextInput
          longInput
          label={`Application for the Post of`}
          value={applicationFor}
          onChange={setApplicationFor}
        />
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
        <TextInput
          longInput
          toUpperCase
          label={`1. Name (Use Capital Letters Only)`}
          value={name}
          onChange={setName}
        />
        <div className="form-group">
          <label for="gender">2. Male/Female/TG (Specify):</label>
          <select
            id="gender"
            className="custom-select"
            value={gender}
            onChange={e => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="TG">TG</option>
          </select>
        </div>
        <div className="form-group">
          <label for="age">3. Age & Date of Birth:</label>
          <input
            id="age"
            type="date"
            max="2019-10-01"
            className="form-control"
            value={dob}
            onChange={e => {
              setDob(e.target.value);
              setAge(getAge(e.target.value));
            }}
          />
          <label for="age">{`Age: ${age}`}</label>
        </div>
        <TextInput
          longInput
          toUpperCase
          label={`4. Father's/Husband's Name`}
          value={father}
          onChange={setFather}
        />
        <div className="form-group">
          <label for="residence">
            5. Place of Residence (Proof to be attached):
          </label>
          <textarea
            id="residence"
            rows="3"
            className="form-control"
            value={residence}
            onChange={e => setResidence(e.target.value)}
          />
        </div>
        <TextInput
          type="tel"
          label={`6.a Phone / Mobile No`}
          value={phone}
          onChange={setPhone}
        />
        <TextInput
          type="tel"
          label={`6.b Phone / Mobile No`}
          value={mobile}
          onChange={setMobile}
        />
        <TextInput
          longInput
          type="email"
          label={`7. e-mail Address`}
          value={email}
          onChange={setEmail}
        />
        <div className="form-group">
          <label for="address">8. Permanent Address (With Pin code):</label>
          <textarea
            id="address"
            rows="3"
            className="form-control"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="qualification">
            9. Qualification (Use Additional Sheets if needed):
          </label>
          <Table
            id="qualification"
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
          className="w-100 btn btn-primary"
          onClick={() => {
            const tempData = [
              ...tableData,
              {
                referenceNo,
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
            setReferenceNo("");
            setCategoryNo("");
            setApplicationFor("");
            setIsScps(false);
            setIsSara(false);
            setDcpu("");
            setJjb("");
            setCh("");
            setName("");
            setGender("");
            setDob("");
            setAge(0);
            setFather("");
            setResidence("");
            setPhone("");
            setMobile("");
            setEmail("");
            setAddress("");
            setexperience("");
            setqualificationsData([
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
          }}
        >
          Save
        </button>
      </div>

      <div className="container py-5">
        <button
          className="btn btn-info"
          onClick={() => {
            const json2csvParser = new Parser();
            const newData = tableData.map(
              ({ qualificationsData, ...items }) => {
                let newItems = { ...items };
                qualificationsData.forEach((element, index) => {
                  newItems = {
                    ...newItems,
                    ...Object.assign(
                      {},
                      ...Object.keys(element).map(key => ({
                        [`${key} ${index + 1}`]: element[key]
                      }))
                    )
                  };
                });
                return newItems;
              }
            );
            const csv = json2csvParser.parse(newData);
            const fileName = new Date() + ".csv";
            var data = new Blob([csv], { type: "text/csv;charset=utf-8;" });
            var csvURL = window.URL.createObjectURL(data);
            let tempLink = document.createElement("a");
            tempLink.href = csvURL;
            tempLink.setAttribute("download", fileName);
            tempLink.click();
          }}
        >
          Download
        </button>
        <Table columns={finalTableColumns(setTableData)} data={tableData} />
      </div>
    </div>
  );
}
