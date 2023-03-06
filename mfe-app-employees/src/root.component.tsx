import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Parcel from "single-spa-react/parcel";
import { getArabicDate } from "@mfe-utility";

export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

interface ComponentState {
  employees: Employee[];
}

export default class Root extends React.Component<any, ComponentState> {
  date: string;
  apiUrl: string;
  constructor(props: ComponentState) {
    super(props);
    this.state = { employees: [] };
    this.apiUrl = this.props?.APIsURL?.employeesBaseUrl;
  }

  componentDidMount() {
    let endPoint = this.apiUrl + "/users";
    fetch(endPoint).then((response) => {
      response.json().then((data) => this.setState({ employees: data.data }));
    });
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    //use utility module
    //TODO:
     //this.date = getArabicDate("2023/09/01");
    const { employees } = this.state;

    if (!employees.length) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    return (
      <BrowserRouter basename="#/">
        <table className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee: Employee) => {
              return (
                <tr key={employee.id}>
                  <th>
                    <Link to={`/employees/employee?id=${employee.id}`}>
                      {employee.id}
                    </Link>
                  </th>
                  <td>{employee.first_name}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <em>{this.props.name} using React</em>

        {/* to use parcel */}
        {/*<section>*/}
        {/*  <Parcel*/}
        {/*    config={(): Promise<*/}
        {/*      import("single-spa").ParcelConfigObject<{}>*/}
        {/*    > => {*/}
        {/*      return System.import("@mfe-parcel-react");*/}
        {/*    }}*/}
        {/*    customProp1="Hello from parent react app"*/}
        {/*    wrapWith="h1"*/}
        {/*    wrapStyle={{ color: "blue" }}*/}
        {/*    handleError={(err) => console.log(err)}*/}
        {/*    parcelDidMount={() => console.log("React parcel mounted")}*/}
        {/*  />*/}
        {/*</section>*/}

        {/*<h1> {this.date}</h1>*/}
      </BrowserRouter>
    );
  }
}
