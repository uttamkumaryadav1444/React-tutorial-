import React, { useState } from "react";

const Resume = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    hobby: "",
    address: "",
    gender: "",
    city: "",
    percentage: "",
    board: "",
    hobbies: [],
    cricketLevel: "",
    runs: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        hobbies: checked ? [...prev.hobbies, value] : prev.hobbies.filter((h) => h !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold">Basic Details</h2>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="block border p-2 w-full" />
          <input name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} className="block border p-2 w-full mt-2" />
          <input name="hobby" placeholder="Hobby" value={formData.hobby} onChange={handleChange} className="block border p-2 w-full mt-2" />
          <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="block border p-2 w-full mt-2" />
          <div className="mt-2">
            <label>Gender: </label>
            <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            <input type="radio" name="gender" value="Female" onChange={handleChange} className="ml-2" /> Female
          </div>
          <select name="city" onChange={handleChange} className="block border p-2 w-full mt-2">
            <option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold">Education Details</h2>
          <input name="percentage" placeholder="10th Percentage" value={formData.percentage} onChange={handleChange} className="block border p-2 w-full" />
          <div className="mt-2">
            <label>Board: </label>
            <input type="radio" name="board" value="State" onChange={handleChange} /> State
            <input type="radio" name="board" value="National" onChange={handleChange} className="ml-2" /> National
            <input type="radio" name="board" value="International" onChange={handleChange} className="ml-2" /> International
          </div>
          <div className="mt-2">
            <label>Hobbies:</label>
            <input type="checkbox" name="hobby" value="Painting" onChange={handleChange} /> Painting
            <input type="checkbox" name="hobby" value="Singing" onChange={handleChange} className="ml-2" /> Singing
            <input type="checkbox" name="hobby" value="Dancing" onChange={handleChange} className="ml-2" /> Dancing
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold">Cricket Details</h2>
          <select name="cricketLevel" onChange={handleChange} className="block border p-2 w-full">
            <option value="">Select Level</option>
            <option value="Domestic">Domestic</option>
            <option value="International">International</option>
            <option value="State Level">State Level</option>
          </select>
          <input name="runs" placeholder="Runs" value={formData.runs} onChange={handleChange} className="block border p-2 w-full mt-2" />
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-xl font-bold">Summary</h2>
          <table className="w-full border mt-4">
            <tbody>
              {Object.entries(formData).map(([key, value]) => (
                <tr key={key} className="border">
                  <td className="p-2 border font-bold">{key.toUpperCase()}</td>
                  <td className="p-2 border">{Array.isArray(value) ? value.join(", ") : value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4">
        {step > 1 && <button onClick={() => setStep(step - 1)} className="p-2 bg-gray-500 text-white rounded mr-2">Back</button>}
        {step < 4 ? (
          <button onClick={() => setStep(step + 1)} className="p-2 bg-blue-500 text-white rounded">Next</button>
        ) : (
          <button onClick={() => alert("Form Submitted Successfully")} className="p-2 bg-green-500 text-white rounded">Submit</button>
        )}
      </div>
    </div>
  );
};

export default Resume;
