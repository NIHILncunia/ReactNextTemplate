import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';

const index = () => {
  const [word, setWord] = useState('React');

  const onClickButton = useCallback(() => {
    switch (word) {
      case 'React':
        setWord('Vue');
        break;
      case 'Vue':
        setWord('React');
        break;
      default:
        break;
    }
  }, [word]);

  const style = css`
    padding: 10px;
    background-color: #333333;
    color: #ffffff;
  `;

  return (
    <>
      <div css={style}>Hello {word}!!</div>
      <button type="button" onClick={onClickButton}>
        클릭해서 변경
      </button>
    </>
  );
};

export default index;
