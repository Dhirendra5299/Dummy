export default function SensorValue({ label, val }) {
  return (
    <div
      style={{ width: "261px", marginTop: "5px"}}
    >
      <label htmlFor="value">{label}:</label>
      <input
        style={{
          width: "20%",
          height: "25px",
          borderRadius: "5px",
          border: "1px solid black",
        }}
        type="text"
        id="value"
        disabled={val}
      />
    </div>
  );
}

