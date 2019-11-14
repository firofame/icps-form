import React from "react";

import EditableCell from "../components/EditableCell";
import Table from "../components/Table";

export const finalTableColumns = setTableData => [
  {
    accessor: "delete",
    Cell: ({ data, row: { index } }) => {
      return (
        <button
          onClick={() => {
            const newArray = data.filter((item, i) => {
              return i !== index;
            });
            setTableData(newArray);
            localStorage.setItem("tableData", JSON.stringify(newArray));
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      );
    }
  },
  { Header: "Reference No", accessor: "referenceNo" },
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
  { Header: "Residence", accessor: "residence" },
  { Header: "Phone", accessor: "phone" },
  { Header: "Mobile", accessor: "mobile" },
  { Header: "Email", accessor: "email" },
  { Header: "Address", accessor: "address" },
  {
    Header: "Qualifications Table",
    accessor: "qualificationsData",
    Cell: ({ cell: { value } }) => {
      if (value) {
        return (
          <Table
            columns={[
              { Header: "Course", accessor: "course" },
              { Header: "Institution/University", accessor: "institution" },
              { Header: "Reg.No", accessor: "regNo" },
              { Header: "Year Of Pass", accessor: "yearOfPass" },
              { Header: "% of Mark/Grade", accessor: "marks" },
              { Header: "Remarks", accessor: "remarks" }
            ]}
            data={value}
          />
        );
      }
      return null;
    }
  },
  { Header: "Experience", accessor: "experience" }
];

export const qualificationsTableColumns = (
  qualificationsData,
  setqualificationsData
) => [
  {
    Header: "Course",
    accessor: "course",
    Cell: cellInfo => (
      <EditableCell
        cellInfo={cellInfo}
        qualificationsData={qualificationsData}
        setqualificationsData={setqualificationsData}
      />
    )
  },
  {
    Header: "Institution/University",
    accessor: "institution",
    Cell: cellInfo => (
      <EditableCell
        cellInfo={cellInfo}
        qualificationsData={qualificationsData}
        setqualificationsData={setqualificationsData}
      />
    )
  },
  {
    Header: "Reg.No",
    accessor: "regNo",
    Cell: cellInfo => (
      <EditableCell
        cellInfo={cellInfo}
        qualificationsData={qualificationsData}
        setqualificationsData={setqualificationsData}
      />
    )
  },
  {
    Header: "Year Of Pass",
    accessor: "yearOfPass",
    Cell: cellInfo => (
      <EditableCell
        cellInfo={cellInfo}
        qualificationsData={qualificationsData}
        setqualificationsData={setqualificationsData}
      />
    )
  },
  {
    Header: "% of Mark/Grade",
    accessor: "marks",
    Cell: cellInfo => (
      <EditableCell
        cellInfo={cellInfo}
        qualificationsData={qualificationsData}
        setqualificationsData={setqualificationsData}
      />
    )
  },
  {
    Header: "Remarks",
    accessor: "remarks",
    Cell: cellInfo => (
      <EditableCell
        cellInfo={cellInfo}
        qualificationsData={qualificationsData}
        setqualificationsData={setqualificationsData}
      />
    )
  }
];
