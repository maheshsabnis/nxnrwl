import { Component } from '@angular/core';
import { Employee } from './../../models/app.employee.model';
import { Departments, Designations } from './../../models/app.constants';
import { EmployeeLogic } from './../../models/app.logic';
@Component({
  selector: 'hltingnx-employee-component',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employee: Employee;
  employees: Array<Employee>;
  private logic: EmployeeLogic;
  depts: Array<any>;

  tableColumns: Array<string>;

  // Assign the COnstants to local public properties of the component
  departments = Departments;
  designations = Designations;
  tax: number;

  constructor() {
    console.log('COnstructor is called');
    this.employee = new Employee(0, '', '', '', 0);
    this.employees = new Array<Employee>();
    this.logic = new EmployeeLogic();
    this.tableColumns = new Array<string>();
    this.depts = new Array<any>();
    this.depts.push({ DeptNo: 10, DeptName: 'IT' });
    this.depts.push({ DeptNo: 20, DeptName: 'HR' });
    this.depts.push({ DeptNo: 30, DeptName: 'SL' });
    this.depts.push({ DeptNo: 40, DeptName: 'AC' });
    this.tax = 0;
  }

  // invoked after the constructor completes its execution
  ngOnInit(): void {
    console.log('ngOnInit is called');
    // call the getEmployees()
    this.employees = this.logic.getEmployees();
    // Read all properties of Employee class into the tableColumns
    // so that it can be used for generating table column headers
    // Dynamically
    this.tableColumns = Object.keys(this.employee);
  }
  clear(): void {
    this.employee = new Employee(0, '', '', '', 0);
  }
  add(x: number, y: number): number {
    return x + y;
  }
  save(): void {
    this.tax = this.employee.Salary * 0.02;
    console.log('Hay BHau Method call zali bara ka..');

    this.employees = this.logic.addEmployee(this.employee);
  }
  getSelectedEmployee(emp: Employee): void {
    // this.employee = emp;
    this.employee = Object.assign({}, emp); // clone of emp and it is assigned to employee
  }
  getDeptName(event: any): void {
    console.log(`DeptNAme ${event}`);

    this.employee.DeptName = event;
  }
  getDesignation(event: any): void {
    console.log(`Designation ${event}`);
    this.employee.Designation = event;
  }

  sortArr(): void {
    this.employees.sort(this.compare);
    console.log(JSON.stringify(this.employees));
  }

  private compare(a: Employee, b: Employee): number {
    if (a.EmpName < b.EmpName) return -1;
    if (a.EmpName > b.EmpName) return 1;
    return 0;
  }

  reverseArr(): void {
    this.employees.reverse();
    console.log(JSON.stringify(this.employees));
  }

  getRowForDelete(event: any): void {
    console.log(`Record Received for Delete ${JSON.stringify(event)}`);
  }
}
