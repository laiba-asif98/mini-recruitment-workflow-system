import { Link } from "react-router-dom";

function CandidateTable({ candidates, onDelete }) {

  if (candidates.length === 0) {

    return (

        <div className="empty-state">

            <h2>No Candidates Found</h2>

            <p>Try changing your search or filter.</p>

        </div>

    );

}
  return (

    <table className="candidate-table">

      <thead>

        <tr>

          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Action</th>

        </tr>

      </thead>

      <tbody>

        {

          candidates.length > 0 ? (

            candidates.map((candidate) => (

              <tr key={candidate.id}>

                <td>{candidate.fullName}</td>

                <td>{candidate.email}</td>

                <td>{candidate.phone}</td>

                <td>

                  <span className="status">
                    {candidate.status}
                  </span>

                </td>

                <td>

    <Link
        to={`/candidate/${candidate.id}`}
        className="view-btn"
    >
        View
    </Link>

    {onDelete && (
    <button
        className="delete-btn"
        onClick={() => onDelete(candidate.id)}
    >
        Delete
    </button>
)}
</td>

              </tr>

            ))

          ) : (

            <tr>

              <td colSpan="5" style={{ textAlign: "center" }}>

                No Candidates Found

              </td>

            </tr>

          )

        }

      </tbody>

    </table>

  );

}

export default CandidateTable;