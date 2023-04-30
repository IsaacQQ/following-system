import React from "react";
import { LoadMoreButton } from "./LoadMore.styled";

function LoadMore({ onClick }) {
  return <LoadMoreButton onClick={onClick}>Load More</LoadMoreButton>;
}

export default LoadMore;