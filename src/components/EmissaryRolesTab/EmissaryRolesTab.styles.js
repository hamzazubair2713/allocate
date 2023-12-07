import styled from "styled-components";

export const GeneralTabHolder = styled.div`
  position: relative;
  color: var(--gray-50);

  @media (min-width: 992px) {}

  .content-holder {
    max-width: 650px;
    margin-bottom: 30px;
  }

  .box {
    max-width: 570px;
    margin: 0 0 33px;
  }

  .subtitle {
    display: block;
    font-size: 16px;
    line-height: 19px;
    margin: 0 0 10px;
    color: var(--solid-gray);
  }

  .btn-holder {
    padding-top: 30px;
    border-top: 1px solid var(--gray-300)
  }
`;

