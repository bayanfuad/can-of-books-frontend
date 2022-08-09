import { Component } from "react";
import Table from 'react-bootstrap/Table';
class Profileu extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
       <Table striped bordered hover>
      <thead>
        <tr>
          Developer Information
        </tr>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact me at </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bayan</td>
          <td>Al-Jawawdeh</td>
          <td><a href="https://github.com/bayanfuad">Github</a></td>
        </tr>
      </tbody>
    </Table>
      </>
    )
  }
};

export default Profileu;