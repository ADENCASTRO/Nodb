import React, {useState} from 'react';
import './App.css'
import teeTimeImg from './assets/teeTime.jpg.jfif'
import EditForm from './components/EditForm';
import axios from "axios"

function App() {
  const [formData, setFormData] = useState({
    name: '',
    time: '',
    date: ''
  });
  const [entries, setEntries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
const toggleForm = ()=> {
  setIsOpen(!isOpen)
}
console.log(isOpen);
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
const response = await axios.post("http://localhost:4500/api/teeTime", {formData})
console.log (response.data)
    setEntries(response.data);
    //setFormData({ name: '', time: '', date: '' }); 
  };

  // Handle delete entry
  const handleDelete = (index) => {
    const newEntries = entries.filter((entry, i) => i !== index);
    setEntries(newEntries);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Time:
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>

        <div className="entries">
          <h2>Submitted Entries</h2>
          <ul>
            {entries.map((entry, index) => (
              <li key={index}>
                <p>Name: {entry.name}</p>
                <p>Time: {entry.time}</p>
                <p>Date: {entry.date}</p>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={toggleForm}>edit</button>
              
              </li>
            ))}
          </ul>
        </div>
      </header>
      {isOpen && <EditForm data = {formData} toggleForm = {toggleForm}/>}
    </div>
  );
}

export default App
