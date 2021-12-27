import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

import ShoeBreadCrumbs from "./ShoeBreadCrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileCrumbs>
              <ShoeBreadCrumbs />
            </MobileCrumbs>
            <Title>Running</Title>
          </div>
          <SortFilterWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortFilterWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <ShoeBreadCrumbs />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const SortFilterWrapper = styled.div`
  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    display: none;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const MobileCrumbs = styled.div`
  display: none;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    display: revert;
  }
`;

export default ShoeIndex;
