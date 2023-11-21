import styled from "@emotion/styled";
import ItemStateSeller from "../../../components/ItemStateSeller";

const TrackItems: React.FC = () => {
  return (
    <Holder>
      <ItemStateSeller category="baby" />
      <ItemStateSeller category="boys" />
      <ItemStateSeller category="girls" />
      <ItemStateSeller category="men" />
      <ItemStateSeller category="women" />
    </Holder>
  );
};

export default TrackItems;

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2.5em;
  gap: 1em;
`;
