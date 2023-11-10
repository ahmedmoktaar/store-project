import styled from "@emotion/styled";

// ---------------
// main component
// ---------------
const NotFound: React.FC = () => {
  return <Holder>You Can't Access This Page</Holder>;
};

export default NotFound;

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.div`
  font-size: 1.5em;
  margin: auto auto;
`;
