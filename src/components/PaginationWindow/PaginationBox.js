import { useEffect, useState } from "react"
import "./PaginationBox.style.css";
import leftArrow from "../../assets/icons/left.svg";
import doubleLeftArrow from "../../assets/icons/double-left-arrow.svg";
import doubleRightArrow from "../../assets/icons/double-right-arrow.svg";
import rightArrow from "../../assets/icons/right.svg"
const PaginationBox = ({ page, setPage, totalRecords,deleteSelected }) => {

    // Find the total number of pages based on the number of records
    const totalPages = Math.ceil(totalRecords / 10)

    let pages = []

    //Set the page index when page get changed
    const changePage = (index) => {
        setPage(index)
    }

    //Navigate the page based on the actions
    const navigatePage = (index) => {
        if (index < 1) {
            index = 1;
        } else if (index > totalPages) {
            index = totalPages;
        }
        setPage(index);
    };

    // double left arrow - navigate to the first page
    pages.push(
        <div key={-2} onClick={() => { navigatePage(1) }} className="icon" >

            <img src={doubleLeftArrow} height={25} width={25}></img>

        </div>
    )

    // Left single arrow - navigate into previous page
    pages.push(
        <div key={-1} onClick={() => { navigatePage(page - 1) }} className="icon" >

            <img src={leftArrow} height={15} width={15}></img>

        </div>
    )

    // Pages
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <div
                key={i}
                onClick={() => changePage(i)}
                className={page === i ? "active" : "inactive"}
            >
                {i}
            </div>
        );
    }

    // right single arrow - navigate to next page
    pages.push(
        <div key={-2} onClick={() => { navigatePage(page + 1) }} className="icon" >

            <img src={rightArrow} height={15} width={15}></img>

        </div>
    )
    // right double arrow - navigate to last page
    pages.push(
        <div key={-1} onClick={() => { navigatePage(totalPages) }} className="icon" >

            <img src={doubleRightArrow} height={17} width={17}></img>

        </div>
    )

    return (
        <div className="pages">
            {/* Delete Selected Button */}
            <button className="delete-button" onClick={() => deleteSelected()}>
                Delete Selected
            </button>
            {/* Pagination Window */}
            {pages && pages.length > 0 && <div className="page">{pages}</div>}
        </div>

    )

}
export default PaginationBox;