import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import InputGroup from "./InputGroup";

function MedalForm({ addCountryHandler, updateCountryHandler }) {
  // 국가명 변수
  const [country, setCountry] = useState("");
  // 금, 은, 동
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  // 값 받아오는 함수들
  const countryInputHandler = (e) => setCountry(e.target.value);
  const goldInputHandler = (e) => setGold(Number(e.target.value));
  const silverInputHandler = (e) => setSilver(Number(e.target.value));
  const bronzeInputHandler = (e) => setBronze(Number(e.target.value));

  // 국가 등록 (제출 버튼)
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const totalMedal = gold + silver + bronze;
    const added = addCountryHandler({
      country,
      gold,
      silver,
      bronze,
      totalMedal,
    });
    // input 초기화 (새로 등록 되었을때만)
    if (added > 0) {
      setCountry("");
      setGold(0);
      setSilver(0);
      setBronze(0);
    }
  };

  // 데이터 업데이트 (업데이트 버튼)
  const formUpdateHandler = () => {
    const totalMedal = gold + silver + bronze;
    const updated = updateCountryHandler({
      country,
      gold,
      silver,
      bronze,
      totalMedal,
    });
    // input 초기화 (업데이트 되었을때만)
    if (updated > 0) {
      setCountry("");
      setGold(0);
      setSilver(0);
      setBronze(0);
    }
  };

  return (
    <form className="data-collector" onSubmit={formSubmitHandler}>
      <InputGroup
        country={country}
        countryInputHandler={countryInputHandler}
        gold={gold}
        goldInputHandler={goldInputHandler}
        silver={silver}
        silverInputHandler={silverInputHandler}
        bronze={bronze}
        bronzeInputHandler={bronzeInputHandler}
      />
      <ButtonGroup formUpdateHandler={formUpdateHandler} />
    </form>
  );
}

export default MedalForm;
