import FlashCard from "./FlashCard";
import Button from "@mui/material/Button";
import NavigateNext from "@mui/icons-material/NavigateNext";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import { useCallback, useState } from "react";
const obj = [
  {
    order: 1,
    hint: "something well",
    content:
      "somethhiing weliownaiongionign naoigaewniow ngioi egnioenginrion Lorem90n naewioojepo 32pogjio og2iion 3o2 nio32ng g \n # he \n ### hello world \n ![image](https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg)",
  },
  {
    order: 2,
    hint: "something 2 well",
    content:
      "somethhidcqwfr29e4889579327532957ing weliownaiongionign naoigaewniow ngioi egnioenginrion Lorem90n naewioojepo 32pogjio og2iion 3o2 nio32ng g",
  },
  {
    order: 3,
    hint: "something 3 well",
    content:
      "somethhidcqwfr29e4889579327532957ing weliownaiongionign 15w16f1161    dniuwfniwDFIOWNEFIOWEIOO naoigaewniow ngioi egnioenginrion Lorem90n naewioojepo 32pogjio og2iion 3o2 nio32ng g",
  },
];

export default function () {
  const [show, setShow] = useState(false);
  const showHandler = useCallback(() => {
    setShow((prev) => !prev);
  }, [show]);

  const [flashcardContent, setFlashcardContent] = useState(obj[0]);

  const [counter, setCounter] = useState<number>(2);
  const increment = useCallback(() => {
    if (counter < obj.length) {
      setCounter((prevCounter) => prevCounter + 1);
      setFlashcardContent(obj[counter]);
      setShow(false);
    }
  }, [counter]);

  const decrement = useCallback(() => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
      setFlashcardContent(obj[counter - 2]);
      setShow(false);
    }
  }, [counter]);

  return (
    <>
      <div className="w-full bg-gray-100 md:w-4/6 lg:w-1/2 xl:w-1/3 p-3 items-center rounded-md h-fit">
        <div className="flex justify-between">
          <Button
            variant="contained"
            color="secondary"
            onClick={decrement}
            startIcon={<NavigateBefore />}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="success"
            endIcon={<NavigateNext />}
            onClick={increment}
          >
            Next
          </Button>
        </div>
        <FlashCard
          show={show}
          showHandler={showHandler}
          hint={flashcardContent["hint"]}
          content={flashcardContent["content"]}
        />
      </div>
    </>
  );
}
