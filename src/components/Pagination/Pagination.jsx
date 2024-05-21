import React from 'react'
import { PaginationWrapper, PageButton } from './Pagination.styled'

const Pagination = ({ events, eventsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(events.length / eventsPerPage)

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  return (
    <PaginationWrapper>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <PageButton
          key={pageNumber}
          onClick={() => paginate(pageNumber)}
          className={currentPage === pageNumber ? 'active' : ''}
        >
          {pageNumber}
        </PageButton>
      ))}
    </PaginationWrapper>
  )
}

export default Pagination
