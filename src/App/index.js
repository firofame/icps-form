import React, { useState } from "react";
import { useTable } from "react-table";

import "./index.css";

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const tableColumns = [
  { Header: "Category No", accessor: "categoryNo" },
  { Header: "Application for", accessor: "applicationFor" },
  { Header: "SCPS", accessor: "isScps" },
  { Header: "SARA", accessor: "isSara" },
  { Header: "DCPU", accessor: "dcpu" },
  { Header: "JJ B/CWC", accessor: "jjb" },
  { Header: "CH/OH/POS", accessor: "ch" },
  { Header: "Name", accessor: "name" },
  { Header: "Gender", accessor: "gender" },
  { Header: "D.O.B", accessor: "dob" },
  { Header: "Age", accessor: "age" },
  { Header: "Father's Name", accessor: "father" },
  { Header: "Phone", accessor: "phone" },
  { Header: "Mobile", accessor: "mobile" },
  { Header: "Email", accessor: "email" },
  { Header: "Address", accessor: "address" },
  { Header: "Experience", accessor: "experience" }
];

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

  const EditableCell = cellInfo => {
    const {
      row,
      column: { id },
      cell: { value: initialValue }
    } = cellInfo;
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
      setValue(e.target.value);
    };
    const onBlur = () => {
      setqualificationsData(
        qualificationsData.map((item, index) => {
          if (row.index === index) {
            return { ...item, [id]: value };
          }
          return item;
        })
      );
    };
    return <input value={value} onChange={onChange} onBlur={onBlur} />;
  };

  const columns = [
    {
      Header: "Course",
      accessor: "course",
      Cell: EditableCell
    },
    {
      Header: "Institution/University",
      accessor: "institution",
      Cell: EditableCell
    },
    {
      Header: "Reg.No",
      accessor: "regNo",
      Cell: EditableCell
    },
    {
      Header: "Year Of Pass",
      accessor: "yearOfPass",
      Cell: EditableCell
    },
    {
      Header: "% of Mark/Grade",
      accessor: "marks",
      Cell: EditableCell
    },
    {
      Header: "Remarks",
      accessor: "remarks",
      Cell: EditableCell
    }
  ];

  function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable({
      columns,
      data
    });

    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return (
    <div className="container mt-5 bg-light">
      Category No:
      <input
        className="ml-2"
        value={categoryNo}
        onChange={e => setCategoryNo(e.target.value)}
      />
      <h4 className="text-center mt-3">
        Women And Child Development Department Integrated Child Protection
        Scheme [ICPS]
      </h4>
      <div className="mt-4">
        Application for the Post of:
        <input
          className="ml-2 w-50"
          value={applicationFor}
          onChange={e => setApplicationFor(e.target.value)}
        />
      </div>
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
      <div className="mt-4">
        1. Name (Use Capital Letters Only):
        <input
          className="ml-2 w-50"
          value={name}
          onChange={e => setName(e.target.value.toUpperCase())}
        />
      </div>
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
      <div className="mt-4">
        4. Father's/Husband's Name:
        <input
          className="ml-2 w-50"
          value={father}
          onChange={e => setFather(e.target.value.toUpperCase())}
        />
      </div>
      <div className="mt-4 d-flex align-items-center">
        5. Place of Residence (Proof to be attached):
        <textarea
          rows="3"
          className="ml-2 w-50"
          value={residence}
          onChange={e => setResidence(e.target.value)}
        />
      </div>
      <div className="mt-4 d-flex align-items-center">
        6. Phone / Mobile No: 1.
        <input
          type="tel"
          className="ml-2 mr-5"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        2.
        <input
          type="tel"
          className="ml-2"
          value={mobile}
          onChange={e => setMobile(e.target.value)}
        />
      </div>
      <div className="mt-4">
        7. e-mail Address:
        <input
          type="email"
          className="ml-2 w-50"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
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
        <Table columns={columns} data={qualificationsData} />
      </div>
      <div className="my-4">
        10. Experience:
        <input
          className="ml-2"
          value={experience}
          onChange={e => setexperience(e.target.value)}
        />
      </div>
      <button
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
      <Table columns={tableColumns} data={tableData} />
    </div>
  );
}
