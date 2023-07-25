import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookData } from "../store/reducers/instructorSlice";

const ViewSingleBook = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  //⤵️  pulling the state of the currentStudent directly from the instructorSlice
  const student = useSelector((state) => state.instructorList.currentStudent);
  //⤵️  pulling the state of the currentBook directly from the instructorSlice
  const book = useSelector((state) => state.instructorList.currentBook);

  useEffect(() => {
    dispatch(fetchBookData(params.id, params.studentId, params.bookId));
  }, []);

  return pages ? (
    <>
      <div className="content-container">
        <button className="book-back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1>{`"${book.title}" by ${student.firstName} ${student.lastName}`}</h1>

        <div className="book-view-instructions">
          Swipe or click to turn the page!
        </div>
      </div>
    </>
  ) : (
    <div>no book data</div>
  );
};

export default ViewSingleBook;
