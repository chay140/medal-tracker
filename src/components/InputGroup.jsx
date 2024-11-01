import React from "react";
import CountryInput from "./CountryInput";
import MedalInput from "./MedalInput";

function InputGroup({
  country,
  countryInputHandler,
  gold,
  goldInputHandler,
  silver,
  silverInputHandler,
  bronze,
  bronzeInputHandler,
}) {
  return (
    <div className="group-input">
      <CountryInput
        country={country}
        countryInputHandler={countryInputHandler}
      />
      <MedalInput
        label="금메달"
        medal={gold}
        medalInputHandler={goldInputHandler}
      />
      <MedalInput
        label="은메달"
        medal={silver}
        medalInputHandler={silverInputHandler}
      />
      <MedalInput
        label="동메달"
        medal={bronze}
        medalInputHandler={bronzeInputHandler}
      />
    </div>
  );
}

export default InputGroup;
