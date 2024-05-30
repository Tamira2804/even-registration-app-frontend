import styled from 'styled-components'

export const FiltersWrapper = styled.div`
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
  margin-bottom: 10px;

  label {
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    margin-bottom: 5px;
  }

  select {
    padding: 5px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--accent);
    font-size: var(--fs-md);
    &:focus {
      border-color: var(--accent-hover);
      outline: none;
    }
  }
`
