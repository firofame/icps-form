import React, { useState } from "react";

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

export default function App() {
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
      </div>
    </div>
  );
}
