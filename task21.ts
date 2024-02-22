let myFields =[
    { name: "Artificial Intelligence (AI)",  jobOpportunities: 10000, averageSalary: 100000 },
    { name: "Blockchain Technology", jobOpportunities: 8000, averageSalary: 90000 },
    { name: "Cybersecurity", jobOpportunities: 12000, averageSalary: 110000 },
    { name: "Data Science and Analytics", jobOpportunities: 15000, averageSalary: 95000 }
];
console.log("Information about top 4 growing fields of IT in Pakistan:");
myFields.forEach(field => {
console.log(`Name: ${field.name}`);
console.log(`Job Opportunities: ${field.jobOpportunities}`);
console.log(`Average Salary (PKR): ${field.averageSalary}`);
console.log("************************");
});