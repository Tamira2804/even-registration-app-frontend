import styled from 'styled-components'

export const FiltersWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    margin-bottom: 5px;
  }

  input,
  select {
    padding: var(--fs-md);
    font-size: var(--fs-md);
    border-radius: var(--radius-sm);
    border: 1px solid var(--accent);
    margin-bottom: var(--fs-md);
    &:focus {
      border-color: var(--accent-hover);
      outline: none;
    }
  }
`

export const FilterButton = styled.button`
  padding: 10px 20px;
  background-color: var(--accent);
  color: var(--white);
  border: none;
  border-radius: var(--radius-sm);
  font-size: var(--fs-md);
  cursor: pointer;
  transition: background-color var(--transition);

  &:hover {
    background-color: var(--accent-hover);
  }
`
