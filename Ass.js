var doctor =
{
    lastName :"Adebisi",
    firstName :"Mikel",
    Age : 45,
    Address : "Lagos",
    displayName:function(){
        return this.lastName +" "+ this.firstName;
       
    },
    displayAge:function(){
        return this.Age + 5;
    }
    
}
console.log(doctor.displayName());
console.log(doctor.displayAge());




