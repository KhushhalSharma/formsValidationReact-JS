import { useState } from "react";
import "./App.css";

const inistate = {
  username: "",
  email: "",
  password: "",
  country: "",
  employed: false,
};

function App() {
  const [formData, setFormData] = useState(inistate);
  const [user, setUser] = useState([]);
  const handleChange = (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.country === ""
    ) {
      alert("Please fill all requirments");
    } else {
      setUser([...user, formData]);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="email"
          type="text"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="password"
          type="text"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <select name="country" value={formData.country} onChange={handleChange}>
          <option>Please Select</option>
          <option value={"INDIA"}>India</option>
          <option value={"AMERICA"}>America</option>
          <option value={"ENGLAND"}>England</option>
          <option value={"PAKISTAN"}>Pakistan</option>
        </select>

        <br />
        <br />
        <div>
          employed
          <input
            type="checkbox"
            name="employed"
            onChange={handleChange}
            checked={formData.employed}
          ></input>
        </div>
        <input type="submit" value={"submit"} />
      </form>
      <br />
      <br />
      {user.map((el) => {
        return (
          <div key={el.username}>
            {el.username}
            <br />
            <br />
            {el.email}
            <br />
            <br />
            {el.password}
            <br />
            <br />
            {el.country}
            <br />
            <br />
            {el.employed}
          </div>
        );
      })}
    </div>
  );
}

export default App;
