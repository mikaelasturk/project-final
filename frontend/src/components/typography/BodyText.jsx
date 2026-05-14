// [ ] TODO make prop for variants for all typography 

import styled from 'styled-components'

const StyledBodyText = styled.div`

  ${({ $variant, $icon }) => $variant === "om-medlemskap-info" && `
      ul {
      list-style: none;
      padding-left: 0;
      margin: 0.5rem 0;
    }
    li {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 0.4rem;
    }
    li::before {
      content: '';
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
      background-image: url("${$icon || '/media/icons/checkbox2.png'}");
      background-size: contain;
      background-repeat: no-repeat;
      margin-top: 0.2rem;
    }
  `}

`

export const BodyText = ({ text, children, variant, icon }) => {
  if (variant === "om-medlemskap-info") {
    const lines = (text || '').split('\n').map(l => l.trim()).filter(Boolean)

    return (
      <StyledBodyText $variant={variant} $icon={icon}>
        <ul>
          {lines.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </StyledBodyText>
    )
  }

  return (
    <StyledBodyText as="p" $variant={variant}>
      {text}{children}
    </StyledBodyText>
  )
}

