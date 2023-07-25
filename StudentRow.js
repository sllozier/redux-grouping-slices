import React from "react";
import { useParams, Link } from "react-router-dom";
import { BookTable } from "./instructor/instructorBooks";
import DeleteStudent from "./DeleteStudent";
import EditStudent from "./EditStudent";

const StudentRow = ({ student, activeTab, setActiveTab }) => {
  const params = useParams();

  return (
    <>
      {student && (
        <tr className="flex-table row" role="rowgroup">
          <td className="flex-row first text-center" role="cell">
            {student.firstName}
          </td>
          <td className="flex-row text-center" role="cell">
            {student.lastName}
          </td>
          <td className="flex-row text-center" role="cell">
            {student.username}
          </td>
          <td className="flex-row text-center" role="cell">
            {student.color}
          </td>
          <td className="flex-row text-center" role="cell">
            <Link
              to={`/instructorPortal/${params.id}/students/${student.id}/books`}
              student={student}
            >
              <button className="small-btn draw-border" id="view">
                View Books
              </button>
            </Link>
          </td>

          <td className="flex-row text-center" role="cell">
            {student.email}
          </td>
          <td className="flex-row text-center" role="cell">
            <EditStudent
              id="view"
              student={student}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </td>
          <td className="flex-row text-center" role="cell">
            <DeleteStudent
              id="view"
              student={student}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default StudentRow;
