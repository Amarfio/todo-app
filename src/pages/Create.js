import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

    // e.preventDefault()
    //code to get all details entered by this user.
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit=(e) =>{
        e.preventDefault();

        const task = {title, description,startDate, endDate};
        setIsPending(true);
        // console.log(task); return false;
        const data = {
            title : title,
            description: description,
            startdateTime: startDate,
            enddateTime: endDate
        };

        fetch('http://localhost:8081/todo-api/public/api/v1/todos',{
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        }).then((response)=>{
            console.log(response.body);
            if(!response.ok){
                var data = response.json();
                console.log(data);
                // var message = data.message;
                // console.log(message)
                // alert('the error is here now');
                throw Error('could not fetch the data for that resource');
            }
            // if(!response.status === 417){
            //     response.json();
            // }
            return response.json();
        }).then((data)=>{
            // console.log(data.message)
            // console.log(JSON.parse(data.message))
            history.push('/');
        }).catch((error)=>{
            // alert(error.message);
            // alert()
        })

        // fetch('http://localhost:8081/todo-api/public/api/v1/todos',{
        //     method: 'GET'
        // }).then((response)=>{
        //     console.log(response.json());
        // })


    }




    return ( 
        <div className="create">
            <h2>Add a Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>

                <label>Description</label>
                <textarea
                required
                value={description}
                onChange = {(e)=>setDescription(e.target.value)}
                ></textarea>

                <label>Start date:</label>
                <input 
                type="datetime-local"
                value={startDate}
                onChange={(e)=>setStartDate(e.target.value)}/>

                <label>End date:</label>
                <input 
                type="datetime-local"
                value={endDate}
                onChange={(e)=>setEndDate(e.target.value)}/>
                {!isPending && <button type="submit" >Add Task</button>}
                {isPending && <button type="submit">Adding task...</button>}
            </form>
        </div>
     );
}
 
export default Create;