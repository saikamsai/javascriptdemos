var person= new Object();

person['firstname']='John';
person['lastname']='Doe';

console.log(person);
console.log(person.firstname);
console.log(person['firstname']);

person.address=new Object();
person.address.street='111 Main street';
person.address.state='NY';
person.address.city='Ny';

console.log(person);