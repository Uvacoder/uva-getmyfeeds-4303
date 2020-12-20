import styled from "styled-components";
import { useStore } from "../context";

const DetailPage = () => {
  const { currentItem, isLoading } = useStore();
  console.log(currentItem);
  return (
    <div>
      {!isLoading ? (
        <div>
          <h2>{currentItem.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: currentItem.description }} />
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default DetailPage;
