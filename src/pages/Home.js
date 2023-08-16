import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Card from "../components/Card";
import axios from "axios";

const fakeData = [];

function Home() {
  const [newCondidate, setNewCondidate] = useState({});
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      `${process.env.PUBLIC_URL}/constants/fakeData.json`
    );
    console.log(response);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("new condidate has been changed");
  }, [newCondidate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCondidate({ ...newCondidate, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setData([...data, newCondidate]);
    setNewCondidate({ fullName: "", age: "", address: "" });
  };

  return (
    <div>
      Nos Condidats:
      <div>
        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3" onChange={handleChange}>
            <Form.Control
              required
              value={newCondidate?.fullName}
              name="fullName"
              placeholder="fullname"
              aria-label="fullname"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3" onChange={handleChange}>
            <Form.Control
              required
              value={newCondidate.age}
              name="age"
              placeholder="age"
              aria-label="age"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <InputGroup className="mb-3" onChange={handleChange}>
            <Form.Control
              required
              value={newCondidate.address}
              name="address"
              placeholder="address"
              aria-label="address"
              aria-describedby="basic-addon3"
            />
          </InputGroup>
          <Button onSubmit={handleSubmit} type="submit">
            create
          </Button>
        </form>

        <br></br>
      </div>
      <div className="d-flex flex-wrap justify-content-around p-2 mt-5">
        {data.map((element, index) => (
          <Card element={element} index={index * 10} className="bg-light" />
        ))}
      </div>
    </div>
  );
}

export default Home;
