import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeWord } from '@/reducers/TestReducer';

const IndexPage = () => {
  const word = useSelector((state) => state.test.word);
  const dispatch = useDispatch();

  const onClickButton = useCallback(() => {
    dispatch(ChangeWord());
  }, [ word, ]);

  const style = css`
    padding: 10px;
    background-color: #333333;
    color: #ffffff;
  `;

  return (
    <>
      <div css={style}>Hello {word}!!</div>
      <button type='button' onClick={onClickButton}>
        클릭해서 변경
      </button>
    </>
  );
};

export default IndexPage;
