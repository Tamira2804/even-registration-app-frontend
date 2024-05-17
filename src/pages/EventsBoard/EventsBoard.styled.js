import styled from 'styled-components'

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const Title = styled.h1`
  font-family: var(--family);
  color: var(--accent);
  font-size: var(--fs-xxl);
  font-weight: var(--fw-bold);
  margin-bottom: var(--fs-xl);
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const PageButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  font-size: 16px;
  border: 1px solid var(--accent);
  border-radius: 5px;
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
