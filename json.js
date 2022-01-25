let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';
const obj = JSON.parse(text);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);