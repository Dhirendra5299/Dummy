import styles from "./Content.module.css";

export default function Content() {
  return (
    <div className={styles.container}>
      <h2>Asset Types</h2>
      <p>
        Asset types make it easy to apply different tracking devices
        configuration for different kinds of cargo you frequently transport
      </p>
      <p>
        For example, you may want a 'Fragile' asset type which have fail
        detection turned on, or a 'Frozen' asset type with high temp alarms.
      </p>
    </div>
  );
}
