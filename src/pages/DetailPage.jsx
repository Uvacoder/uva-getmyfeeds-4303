import styled from "styled-components";
import { useStore } from "../context";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { BiArrowBack } from "react-icons/bi";
import ButtonContainer from "../containers/ButtonContainer";
import { BookmarkButton } from "../components/BookmarkButton";

const DetailPage = () => {
  const { currentItem, isLoading } = useStore();
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
`;

const Heading = styled.h2`
  font-size: 28px;
  text-align: center;
`;

const SubText = styled.p`
  font-size: 16px;
  color: ${(p) => p.theme.colors.accent};
  text-align: right;
  font-style: italic;
`;

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
