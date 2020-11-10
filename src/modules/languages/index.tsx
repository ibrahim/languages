import * as React from 'react';
import Styled from 'styled-components';
import SideBar from './sidebar';
import LanguagesList from './languages-list';
import { Button } from './styled';

export const LanguagePage = () => {
  return (
    <Container>
      <Buttons>
        <PrimaryButton> New Project </PrimaryButton>
        <Button> Expand all </Button>
        <Button> Collapse all </Button>
      </Buttons>
      <Panel>
        <SideBar />
        <LanguagesList />
      </Panel>
    </Container>
  );
};

const Container = Styled.div`
	margin:40px;
	display:flex;
	flex-flow:column wrap;
	height:100%;
	box-sizing:border-box;
`;
const Panel = Styled.div`
	display:flex;
	flex-flow:row nowrap;
	box-sizing:border-box;
	flex-grow:1;
`;
const Buttons = Styled.div`
	flex-basis:100%;
	height:40px;
	display:flex;
	flex-flow:row wrap;
`;

const PrimaryButton = Styled(Button)`
color:white;
background-color: #5489DC;
border: 1px solid white;
`;
export default LanguagePage;
