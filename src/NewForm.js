import React, { useState } from 'react'

const NewForm = () => {

    const [data, setdata] = useState({
        name: "",
        email: "",
        age: ""
    });
    const [submitdata, setsubmitdata] = useState([]);

    const handelOnchnage = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }


    const handelSubmit = (e) => {
        e.preventDefault();
        // console.log("click");
        console.log(data);
        // setsubmitdata([...submitdata,data])

        const newData = [...submitdata, data];
        const sortedData = newData.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        setsubmitdata(sortedData);
        setdata({
            name: "",
            email: "",
            age: ""
        })
    }

    return (
        <>
            <div className='container'>
                <h5>
                    craete  Form
                </h5>
                Name  :
                <input name="name" type="text" value={data.name} onChange={handelOnchnage} />
                <br />
                Email :
                <input name="email" type="text" value={data.email} onChange={handelOnchnage} />
                <br />
                Age :
                <input name="age" type="text" value={data.age} onChange={handelOnchnage} />
                <br />
                <button type='button' onClick={handelSubmit}>Submit </button>
            </div>


            <div className='container'>

                <h5>
                    Display Data
                </h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sno</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submitdata.length > 0
                                ?
                                // setsubmitdata.sort((a, b) => a.fname.localeCompare(b.fname))
                                    submitdata.map((elem, index) => (
                                        <>
                                            <tr>
                                                <td key={index}>{index}</td>
                                                <td>{elem.name}</td>
                                                <td>{elem.email}</td>
                                                <td>{elem.age}</td>
                                                <br />
                                            </tr>
                                        </>
                                    )
                                    )
                                :
                                <p>No data </p>
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default NewForm
