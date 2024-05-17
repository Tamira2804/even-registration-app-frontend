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
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`
export const Item = styled.li`
  width: 240px;
  overflow: hidden;
  padding: 10px;
  border: 1px solid var(--accent);
  border-radius: 5px;
`
