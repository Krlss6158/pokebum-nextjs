import { useState, useEffect } from "react";
import Layouts from '../layout';
import HomeCardPokemon from "../components/HomeCardPokemon";

export default function Home() {

  const [randomNumber, setRandomNumber] = useState(null);
  const [numbtn, setNumBtn] = useState(1);

  useEffect(() => {
    function generateRandomNumeber(min, max) {
      setRandomNumber(Math.floor(Math.random() * (max - min) + min));
    }
    generateRandomNumeber(1, 807);
  }, [numbtn]);


  return (
    <Layouts>
      <div className='w-full mt-20'>
        {randomNumber && (
          <HomeCardPokemon
            randomNumber={randomNumber}
            setNumBtn={setNumBtn}
            numbtn={numbtn}
          />
        )}
      </div>
    </Layouts>
  )
}
