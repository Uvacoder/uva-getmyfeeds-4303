import styled from "styled-components";
import { useStore } from "../context";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { BiArrowBack } from "react-icons/bi";
import ButtonContainer from "../containers/ButtonContainer";
import { BookmarkButton } from "../components/BookmarkButton";

const DetailPage = () => {
  const { currentItem, isLoading } = useStore();
  //used for going back to the previous state, an alternative was to hardcode the back value to / which would
  //just take it back to the home.
  const history = useHistory();

  return (
    <>
      <Button onClick={() => history.goBack()}>
        <BiArrowBack /> Back
      </Button>
      <Wrapper>
        {!isLoading ? (
          <>
            <Heading>{currentItem.title}</Heading>
            <SubText> - {currentItem.author}</SubText>
            <ButtonWrapper>
              <ButtonContainer />
              <BookmarkButton item={currentItem} />
            </ButtonWrapper>
            {/* The JSON returned from the XML has 2 properties -> content and description, which
              come up as html syntax. dangerouslySetInnerHTML allows us to write html content directly to the DOM,
              without the usage of JSX.
              An alternate to this would've been the html-parser library, which takes care of the security aspect of
              the issue, however for the purpose of this small webapp, the inbuilt react version should suffice.
            */}
            <ParsedHTML
              dangerouslySetInnerHTML={{ __html: currentItem.description }}
            />
          </>
        ) : (
          <h2>Loading</h2>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  width: 65%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 24px;
    margin: 10px 0;
  }
`;

const SubText = styled.p`
  font-size: 16px;
  color: ${(p) => p.theme.colors.accent};
  text-align: right;
  font-style: italic;
`;

//Styling of the HTML Syntax available in the JSON
//Done for better readibility
const ParsedHTML = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;

  h2 {
    display: none;
  }

  h4 {
    color: ${(p) => p.theme.colors.accent};
    text-align: center;
  }

  p {
    margin: 10px 0;
  }

  img {
    width: 80%;
    margin: 10px 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  figcaption {
    color: ${(p) => p.theme.colors.accent};
  }

  a {
    color: ${(p) => p.theme.colors.link};
  }

  li {
    margin: 5px 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default DetailPage;
