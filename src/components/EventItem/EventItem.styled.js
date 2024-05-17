import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardThumb = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  width: 274px;
  height: 274px;
  padding: 20px;

  box-shadow: var(--shadow);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`
export const Title = styled.h3`
  color: var(--colors-text);
  font-size: var(--fs-xl);
  font-weight: var(--fw-bold);
  line-height: 1.5;
`

export const Descr = styled.div`
  height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* Максимальна кількість рядків */
  -webkit-box-orient: vertical;
  max-height: 6 * 1rem;
`

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: var(--accent-hover);
  &:hover {
    text-decoration: underline;
  }
`

export const Btn = styled.button`
  display: inline-block;
  border: none;
  background-color: transparent;
  color: var(--accent-hover);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`
