import { Link } from "react-router-dom";
const CreateServiceRecord = () => {
  const products = ["PC", "laptop", "Acessories", "Smps", "Cooler"];
  const models = ["Asus", "Acer", "HP", "Dell"];
  return (
    <div className="form" onChange={(e)=>e.preventDefault}>
      <form className="NewService">
        <label htmlFor="err">customer Name</label>
        <input type="text" placeholder="Enter the customer name" />
        <label> Phone Number</label>
        <input type="number" placeholder="Enter the customer name" />
        <label>Complaints</label>
        <textarea type="text" placeholder="Detailed complaints enter here" />
        <label>Product</label>
        <select name="languages" id="product">
          {products.map((product) => (
            <option key={product}>{product}</option>
          ))}
        </select>
        <label>Model</label>
        <select name="languages" id="model">
          {models.map((model) => (
            <option key={model}>{model}</option>
          ))}
        </select>

        <button type="submit">Create new Record</button>
      </form>
    </div>
  );
};

export default CreateServiceRecord;
