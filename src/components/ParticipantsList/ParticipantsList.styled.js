import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
export const Item = styled.li`
  flex: 1 1 auto;
  max-width: calc(50% - 10px);
  overflow: hidden;
  padding: 10px;
  border: 1px solid var(--accent);
  border-radius: 5px;
`
