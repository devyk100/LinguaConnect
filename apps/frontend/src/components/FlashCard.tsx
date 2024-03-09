import { useCallback, useState } from "react";
import Button from "@mui/material/Button";

import Markdown from 'react-markdown'

export default function ({ hint, content, showHandler, show }: { hint: string; content: string; showHandler: any; show: boolean }) {

  return (
    <>
      <div className="flex flex-col w-full bg-gray-100 p-3 items-center rounded-md h-fit">
        <div className="font-extrabold text-4xl mb-4 border-b-2 pb-2 w-full text-center">
          {hint}
        </div>
        {show == false ? (
          <Button onClick={showHandler} variant="outlined">
            Show Answer
          </Button>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <div className="font-light text-lg p-3 text-center prose lg:prose-xl">
                <Markdown>
                {content}
                </Markdown>
            </div>
            <Button onClick={showHandler} variant="outlined">
              Hide
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
