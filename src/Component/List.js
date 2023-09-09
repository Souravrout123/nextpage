import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import axios from "axios";
import Urls from "../Utils/apiurl";
import DataTable from "react-data-table-component";
import "../Component/css/List.css"

const List = () => {
  const [carddata, setCarddata] = useState([]);
  const Getallclassdata = async () => {
    try {
      const response = await axios.get(`${Urls.getclassData}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(response.data);
      setCarddata(response.data);
    } catch (error) {}
  };

  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Time",
      selector: (row) => row.time,
    },
    {
      name: "Availability",
      selector: (row) => row.available,
    },
  ];

  useEffect(() => {
    Getallclassdata();
  }, []);

  return (
    <div className="center-card">
      <Card>
        <CardBody>
          <DataTable columns={columns} data={carddata} />
        </CardBody>
      </Card>
    </div>
  );
};

export default List;

