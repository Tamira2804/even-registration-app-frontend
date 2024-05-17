import styled from 'styled-components'
import Image from '../../images/hero4.jpg'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  background-position: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`
export const Button = styled(Link)`
  display: flex;

  padding: 16px 24px;
  justify-content: center;
  align-items: center;

  border-radius: var(--radius-sm);
  background-color: var(--accent);
  color: var(--white);

  margin-bottom: 10%;
  margin-left: auto;
  margin-right: auto;

  font-size: var(-fs-sm);
  font-weight: var(fw-bold);
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background-color: var(--accent-hover);
  }
`
