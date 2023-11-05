import Emp from "./Emp";
const data =[
{
name:"Ahmed",
age:21,
active:"acttive"
},
{
    name:"Mohmed",
    age:32,
    active:"unacttive"
}
]; 
const Emps = () => {
return(
<>
<Emp name = {data[0].name} age = {data[0].age} status = {data[0].active}/>
<Emp name = {data[0].name} age = {data[0].age} status = {data[0].active}/>
</>
)
}
export default Emps;