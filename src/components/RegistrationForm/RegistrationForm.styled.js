import styled from 'styled-components'

export const FormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: var(--fs-md);
  border: 1px solid var(--accent);
  border-radius: var(--radius-md);
  background-color: var(--white);
  font-family: var(--family);
`

export const Input = styled.input`
  width: 100%;
  padding: var(--fs-md);
  font-size: var(--fs-md);
  border: 1px solid var(--accent);
  border-radius: var(--radius-sm);
  margin-bottom: var(--fs-md);
`
export const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--fs-md);

  input[type='radio'],
  label {
    margin-right: 10px;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: var(--fs-md);
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  color: var(--white);
  background-color: var(--accent);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background-color var(--transition);

  &:hover {
    background-color: var(--accent-hover);
  }
`
