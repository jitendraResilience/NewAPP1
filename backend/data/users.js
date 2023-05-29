
import bcrypt from "bcryptjs"
const users =[
    {
        name:"Admin user",
        email:"admin@resilience.com",
        password:bcrypt.hashSync('12345', 10),
        isAdmin:true
    },
    {
        name:"jack",
        email:"jack@resilience.com",
        password:bcrypt.hashSync('12345', 10),
       
    },
    {
        name:"jitendra",
        email:"jitendra@resilience.com",
        password:bcrypt.hashSync('12345', 10),
      
  
        
    },
  
]

export default users;