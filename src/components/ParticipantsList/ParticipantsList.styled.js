import styled from 'styled-components'

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 10px;
`
export const Item = styled.li`
  overflow: hidden;
  padding: 10px;
  border: 1px solid var(--accent);
  border-radius: 5px;
`
