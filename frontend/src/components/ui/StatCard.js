import "../../styles/dashboard.css";

function StatCard({ title, value, color }) {
  return (
    <div className="stat-card">

      <div
        className="card-top"
        style={{ backgroundColor: color }}
      ></div>

      <h3>{title}</h3>

      <h1>{value}</h1>

    </div>
  );
}

export default StatCard;