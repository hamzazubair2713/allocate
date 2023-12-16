import styled from "styled-components";

export const CombineInputStyle = styled.div`
  margin-bottom: 8px;
  width: 100%;
  font-family: var(--base-font-sans-serif);

  label {
    display: block;
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0 0 10px;
  }

  input {
    font-family: var(--base-font-sans-serif);
    width: 100%;
    border: 1px solid var(--gray-300);
    outline: none;
    padding: 14px 18px;
    border-radius: 5px;
    color: var(--gray-50);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: var(--gray-250);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProgramDrop = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 14px; */
  position: relative;
  width: 100%;

  label {
    display: block;
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0 0 10px;
  }
`;

export const DropDownListWrapper = styled.ul`
  position: relative;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  padding: 15px 18px;
  color: var(--gray-50);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: var(--gray-250);
  display: flex;
  align-items: center;
  gap: 4px;
  text-overflow: ellipsis;
  .dropDownIcon {
    position: absolute;
    right: 15px;
    cursor: pointer;
  }
`;
export const DropDownListWrapperSelect = styled.ul`
  position: relative;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  padding: 15px 18px;
  color: var(--gray-50);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: var(--gray-250);
  display: flex;
  align-items: center;
  gap: 4px;
  text-overflow: ellipsis;

  /* Targtes on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 2px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 30px;
    background: #eceaf9;
  }

  *::-webkit-scrollbar-thumb {
    background: var(--primary);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.03);
    border-radius: 30px;
  }

  .dropDownIcon {
    position: absolute;
    right: 15px;
    cursor: pointer;
  }
  .dropDownAddIcon {
    position: absolute;
    right: -40px;
    cursor: pointer;
  }
  .selectWrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 90%;
    overflow-x: auto;
  }
  .itemWrapper {
    display: flex;
    align-items: center;
    gap: 7px;
    width: 110px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid #e1e1e1;
    background: rgba(217, 217, 217, 0);
    padding: 10px 20px 10px 10px;
    position: relative;
    z-index: 10;
    p {
      margin: 0;
    }
    .cross {
      position: absolute;
      right: 6px;
      cursor: pointer;
    }
  }
`;

export const DropDownItem = styled.div`
  position: absolute;
  padding: 19px 0;
  overflow: hidden;
  display: ${({ display }) => display};
  right: 0;
  left: 0;
  background: var(--gray-250);
  top: 49px;
  transition: 0.3s all ease;
  li {
    background: var(--gray-250);
    width: 100%;
    padding: 0 22px;
    margin-bottom: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const DropDownAssetsItem = styled.div`
  position: absolute;
  padding: 19px 0;
  overflow: hidden;
  display: ${({ display }) => display};
  right: -2px;
  left: -2px;
  background: var(--gray-250);
  top: 49px;
  transition: 0.3s all ease;
  z-index: 10;
  li {
    background: var(--gray-250);
    width: 100%;
    padding: 0 22px;
    margin-bottom: 38px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const PaymentDropDownItem = styled.div`
  position: absolute;
  padding: 19px 0;
  overflow: hidden;
  display: ${({ display }) => display};
  right: 0;
  left: 0;
  background: var(--white);
  top: 49px;
  transition: 0.3s all ease;

  li {
    background: var(--white);
    width: 100%;
    padding: 0 22px;
    margin-bottom: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
