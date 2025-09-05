'use strict';

/* const list = document.getElementsByTagName('li');
const array = [...list]; */

function getSalary(item) {
  const salaryString = item.dataset.salary;
  const cleanedString = salaryString.replace(/[$,]/g, '');

  return Number(cleanedString);
}

function getEmployees(list) {
  const employeesArray = [...list];
  const employeeObjects = employeesArray.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalary(item),
      age: Number(item.dataset.age),
    };
  });

  return employeeObjects;
}

function sortList(list) {
  const ar = [...list].sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });

  const parentList = list[0].parentNode;

  parentList.innerHTML = '';

  ar.forEach((item) => {
    parentList.appendChild(item);
  });
}

const lists = document.getElementsByTagName('li');

sortList(lists);
getEmployees(lists);
