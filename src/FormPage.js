import React, { useState } from 'react'

const FormPage = () => {

    const [data, setdata] = useState({
        name: "",
        email: "",
        age: ""
    });

    const handelOnchnage = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log("click");
    }

    return (
        <>
            <div className='container'>
                <h2>
                    Create Form
                </h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={data.name} onChange={(e) => handelOnchnage(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={data.email} onChange={handelOnchnage} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                        <input type="number" className="form-control" name="age" value={data.age} onChange={handelOnchnage} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handelSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormPage
