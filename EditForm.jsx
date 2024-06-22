import { useState } from "react";
const EditForm = ({toggleForm}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const [formData, setFormData] = useState({
        name: '',
        time: '',
        date: ''
      });
      const [entries, setEntries] = useState([]);
    
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        setEntries([...entries, formData]);
        setFormData({ name: '', time: '', date: '' }); 
      };
    return  (
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
        <button onClick ={toggleForm}>X</button>
      </form>
    )
}
export default EditForm