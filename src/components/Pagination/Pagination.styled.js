import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const PageButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  font-size: 16px;
  border: 1px solid var(--accent);
  border-radius: var(--radius-sm);
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--accent-hover);
    color: var(--white);
  }

  &.active {
    background-color: var(--accent-hover);
    color: var(--white);
  }
`
