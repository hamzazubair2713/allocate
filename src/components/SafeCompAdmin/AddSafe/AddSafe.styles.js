import styled from "styled-components";
export const AddRequestUserStyles = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  gap: 33px;
  align-items: center;
  justify-content: center;
  color: var(--gray-50);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  .imageWrapper {
    max-width: 126px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .addTransfer {
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid var(--blue);
    width: 180px;
    padding: 13.5px 0;
    color: var(--blue);
  }
`;
export const AddSafeStyles = styled.div`
  max-width: 700px;
  .label {
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .strog {
    display: block;
    color: var(--blue);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .textArea {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    textarea {
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      width: 100%;
      resize: none;
      outline: none;
      border-radius: 5px;
      border: 1px solid var(--gray-300);
      background: transparent;
      padding: 15px;
    }
    .float {
      text-align: right;
      color: var(--gray-50);
    }
  }
`;
export const ApprovalDropdown = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--gray-50);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  .approvalheading {
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;