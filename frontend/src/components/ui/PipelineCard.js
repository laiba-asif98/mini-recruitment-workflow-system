function PipelineCard({ title, count }) {
  return (
    <div className="pipeline-item">
      <h4>{title}</h4>
      <p>{count} Candidates</p>
    </div>
  );
}

export default PipelineCard;