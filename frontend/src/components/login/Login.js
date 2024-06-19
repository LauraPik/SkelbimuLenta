import { useState } from "react"
import * as authService from "../../services/auth"
import { useDispatch } from "react-redux";
import { signInStart, signInSuccess } from "../../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password:''
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const data = await authService.login(form)
            dispatch(signInSuccess(data))
            console.log('sekme')
            navigate('/dashboard')

        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <div  className="container">
                <form  onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">El.pašto adresas</label>
                        <input type="email" name="email" onChange={handleChange} value={form.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Slaptažodis</label>
                        <input type="password" name="password" onChange={handleChange} value={form.password} className="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <div className="mb-3 ms-1">
                    <button type="submit"  className="btn btn-primary">Prisijungti</button>
                    <Link to="/register">
                    <button className="btn btn-primary ">Jei neturi paskyros gali susikurti</button></Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login