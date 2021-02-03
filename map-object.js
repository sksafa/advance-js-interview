

const student = [
    {id:10, name:'omor sunny'},
    {id:20, name:'Mannnaaa'},
    {id:41, name:'lima baburi'},
    {id:53, name:'muyori sona'},
    {id:33, name:'sallu khan'}
];

const result = student.map(s => s.name);
console.log(result);

const biggerId = student.filter(x => x.id>20);
console.log(biggerId);