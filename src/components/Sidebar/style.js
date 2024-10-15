import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Side = styled.div`
  width: 280px;
  height: 100vh;
  max-width: 280px;
  min-width: 280px;
  background-color: white;
  /* border: 2px solid red; */
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Body = styled.div`
  flex: 1;
  /* border: 2px solid blue; */
`;
const Wrapper = styled.div`
  border: 2px solid blue;
  margin: 16px;
  background-color: white;
`;
const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  font-style: normal;
  line-height: 28px;
  color: #1890ff;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(222, 225, 227, 1);
  cursor: pointer;
`;
const LogOut = styled(Logo)`
  border-top: 1px solid rgba(222, 225, 227, 1);
  border-bottom: 0;
  position: relative;
`;
export { Container, Side, Body, Wrapper, Logo, LogOut };
