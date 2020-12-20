import styled from "styled-components";
import { useStore } from "../context";

const DetailPage = () => {
  const { currentItem, isLoading } = useStore();

  return (
    <Wrapper>
      {!isLoading ? (
        <>
          <Heading>{currentItem.title}</Heading>
          <ParsedHTML
            dangerouslySetInnerHTML={{ __html: currentItem.description }}
          />
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </Wrapper>
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

const ParsedHTML = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

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

export default DetailPage;
