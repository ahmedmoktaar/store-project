import styled from "@emotion/styled";
import ItemStateSeller from "../../../components/ItemStateSeller";

const TrackItems: React.FC = () => {
  return (
    <Holder>
      <ItemStateSeller category="babyboy" />
      <ItemStateSeller category="babygirl" />
      <ItemStateSeller category="boy" />
      <ItemStateSeller category="girl" />
      <ItemStateSeller category="man" />
      <ItemStateSeller category="woman" />
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
