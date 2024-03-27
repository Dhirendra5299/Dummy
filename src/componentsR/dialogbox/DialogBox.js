import Dropdown from "../dropdown/Dropdown";
import SameDropdown from "../samedropdown/SameDropdown";
import classes from "./DialogBox.module.css";
import Toggle from "../toggle/Toggle";
import SensorValue from "../Sensor_value";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


export default function DialogBox({onClose}) {
  const [value, setValue] = useState({val:true,id:""});
  const [checkValue,setCheckValue] = useState("option1");
  const [inp ,setInp] = useState();
  function handleClick(check,id) {
    setValue({val:check,id:id});
  }
  function handleChange(value){
    setCheckValue(value);
  }

  function handleInput(event){
          setInp(event.target.value);
          console.log(inp);
  }

  function handle() {}
  return (
    <div className={classes.dialogBox}>
      <h3>Create New Configuration Template</h3>
      {/* <button onClick={onClose}>X</button> */}
      <CloseIcon className={classes.crossBtn} onClick= {onClose}/>
      <form className={classes.form}>
        <label htmlFor="product_name">Product name:</label>
        <div style={{ width: "267.48px"}}>
          <SameDropdown />
        </div>
        <div className={classes.one}>
          <label htmlFor="template_name">Template name:</label>
          <br />
          <input type="text" id="template_name"  value={inp} onChange={handleInput} />
        </div>
        <div className={classes.two}>
          <p>Device State in the Configuration</p>
          <input type="radio" id="option1" value="option1" checked={checkValue ==="option1"} onChange={()=>handleChange("option1")} />
          Active Tracking
          <input type="radio" id="option2" value="option2" checked={checkValue ==="option2"} onChange={()=>handleChange("option2")} />
          Not Active
        </div>
        <div className={classes.drop}>
          <div>
            <label>How often should sensor data be collected?</label>
            <br />
            <SameDropdown placeholder={"select one"} />
            <p>Note:This section will impact battery life.</p>
          </div>
          <div>
            <label>How often should location & measurementsbe reported to the cloud?</label>
            <br />
            <SameDropdown placeholder={"select one"} />
            <p>Note:This section will impact battery life.</p>
          </div>
        </div>
        <p>which sensor data should be periodically collected?</p>
        <div className={classes.toggle}>
          <Toggle label="Temperature" onSelect={handleClick} />
          <Toggle label="Pressure" onSelect={handleClick} />
          <Toggle label="Humidity" onSelect={handleClick} />
          <Toggle label="Tilt" onSelect={handleClick} />
          <Toggle label="Light" onSelect={handleClick}/>
        </div>
        <div className={classes.value}>
          <div style={{opacity : (value.id === "Temperature"&& value.val=== false) ? "1" : "0.2" }}>
          <SensorValue label="High Temperature Alert(°C)" val={value.val} />
          <SensorValue label="Low Temperature Alert(°C)" val={value.val} />
          </div>
          <div style={{opacity : (value.id === "Pressure"&& value.val=== false) ? "1" : "0.2" }}>
          <SensorValue label="High Pressure Alert(hPa)" val={value.val} />
          <SensorValue label="Low Pressure Alert(hPa)" val={value.val} />
          </div>
          <div style={{opacity : (value.id === "Humidity"&& value.val=== false) ? "1" : "0.2" }}>
          <SensorValue label="High Humidity Alert(%)" val={value.val} />
          <SensorValue label="Low Humidity Alert(deg)" val={value.val} />
          </div>
          <div style={{opacity : (value.id === "Tilt"&& value.val=== false) ? "1" : "0.2" }}>
            <SensorValue label="Alert angle(deg)" val={value.val} />
          </div>
          
          
         
          
        </div>
        <p>Which algorithms are relevant to this use case, if any?</p>
        <p>
          Note:if detected, these events triggers an immediate alert to the
          cloud
        </p>
        <div className={classes.action}>
          <Toggle label="Fall" onSelect={handle} />
          <Toggle label="Motion" onSelect={handle}/>
          <Toggle label="shock" onSelect={handle} />
          <div className={classes.small}>
            <Dropdown placeholder="10g" />
          </div>
          <Toggle label="Light Exposure" onSelect={handle}/>
          <div className={classes.extend}>
           <SameDropdown />
          </div>
        </div>
        <p>
          Which location technologies should be used and with what priority?
        </p>
        <div className={classes.action}>
          <Toggle label="Location Reporting" />
          <div className={classes.small}>
            <span>1</span>
            <Dropdown placeholder="None" />
          </div>
          <div className={classes.small}>
            <span>2</span>
            <Dropdown placeholder="None" />
          </div>
          <div className={classes.small}>
            <span>3</span>
            <Dropdown placeholder="None" />
          </div>
        </div>
        <div className={classes.end}>
          <div>
            <button className={classes.cancel} onClick={onClose} type="button">Cancel</button>
          </div>
          <div>
            <button className={classes.create}>Create</button>
          </div>
        </div>
      </form>
    </div>
  );
}
