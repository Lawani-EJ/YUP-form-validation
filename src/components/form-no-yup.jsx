import { useState } from "react";

const FormWithoutYup = () => {
    //create a state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        intrests: [],
        birthDate: "",
    });
        const [errors, setErrors] = useState()

    const validateForm = () => {

    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        const isvalid = validateForm();
        if(isvalid){
                console.log("Form Submitted", formData)
        }else{
                console.log("Form Validation Failed")
        }
    }

    const handleChange = (e) =>{
        const {name,value} = e.target;
        
        setFormData({
                ...formData,
                [name]:value
        })
    };

    const handleCheckboxChange = (e) =>{
        const {name,checked} = e.target;
        let updatedIntrests = [...formData.intrests];
        if(checked){
                updatedIntrests.push(name);
        } else {
                updatedIntrests = updatedIntrests.filter(
                        (intrest) => intrest!= name
                );
        }

        setFormData({
                ...formData,
                intrests: updatedIntrests,
        });
    };
  return (
     <form onSubmit={handleSubmit}>
        <div>
        <label>First Name:</label>
        <input type="text"
        name="firstName" 
        value={formData.firstName}
        placeholder="Enter Your First Name:"
        onChange={handleChange}
        />
</div>


<div>
<label>Last Name:</label>
        <input type="text"
        name="lastName" 
        value={formData.lastName}
        placeholder="Enter Your Last Name:"
        onChange={handleChange}
        />
</div>


<div>
<label>email address:</label>
        <input type="email"
        name="email" 
        value={formData.email}
        placeholder="Enter Your email Address:"
        onChange={handleChange}
        />
</div>


<div>
<label>Phone No:</label>
        <input type="text"
        name="phoneNumber" 
        value={formData.phoneNumber}
        placeholder="Enter Your Phone:"
        onChange={handleChange}
        />
</div>


<div>
<label>Password:</label>
        <input type="password"
        name="password" 
        value={formData.password}
        placeholder="Enter Your Password:"
        onChange={handleChange}
        />
</div>


<div>
<label>Confirm Password</label>
        <input type="password"
        name="confirmPassword" 
        value={formData.confirmPassword}
        placeholder="Confirm Your Password:"
        onChange={handleChange}
        />
</div>


<div>
<label>Age:</label>
        <input type="age"
        name="age" 
        value={formData.age}
        placeholder="Enter Your age:"
        onChange={handleChange}
        />
</div>


<div>
<label>Gender: </label>
<select name="gender" value={formData.gender} onChange={handleChange}>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Others</option>
</select>
</div>


<div>
<label>Intrests: </label>
<label>
        <input type="checkbox"
        name="coding"
        checked={formData.intrests.includes("coding")}
        onChange={handleCheckboxChange}
         />
         Coding
</label>
</div>


<div>
<label>
        <input type="checkbox"
        name="sports"
        checked={formData.intrests.includes("sports")}
        onChange={handleCheckboxChange}
         />
         Sports
</label>
</div>


<div>
<label>
        <input type="checkbox"
        name="Reading"
        checked={formData.intrests.includes("reading")}
        onChange={handleCheckboxChange}
         />
         Reading
</label>
</div>

<div>
<label>Date of Birth: </label>
<input type="date" 
name="birthdate"
value={formData.birthDate}
onChange={handleChange}
placeholder="Enter your date of birth"
/>
</div>
<button type="submit">Submit</button>
    </form>
  )
}

export default FormWithoutYup;
