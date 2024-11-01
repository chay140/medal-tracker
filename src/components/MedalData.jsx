import React, { useEffect, useState } from "react";
import MedalForm from "./MedalForm";
import Table from "./Table";

function MedalData() {
  // 국가별 데이터
  const [countries, setCountries] = useState([]);

  // 정렬 모드
  const [sortMode, setSortMode] = useState("byMedal");
  const [tableKey, setTableKey] = useState(0);

  // 정렬 후 setCountries
  // 추가, 업데이트, 삭제 함수 모두
  // setCountries가 아닌 sortedSetCountries를 쓰게끔
  const sortedSetCountries = (data) => {
    if (sortMode === "byMedal") {
      data.sort((a, b) => {
        // 내림차순
        if (a.gold !== b.gold) return b.gold - a.gold;
        if (a.silver !== b.silver) return b.silver - a.silver;
        return b.bronze - a.bronze;
      });
    } else if (sortMode === "byTotal") {
      data.sort((a, b) => b.totalMedal - a.totalMedal);
    }
    setCountries(data);

    // Table의 키를 하나 바꿈으로써 re-render
    setTableKey((prevKey) => prevKey + 1);
  };

  // 추가 함수
  const addCountryHandler = (newData) => {
    if (
      countries.some((item) => item.country.trim() === newData.country.trim())
    ) {
      alert(
        `이미 등록된 국가입니다.\n업데이트를 원하시면 업데이트 버튼을 클릭해주세요.`
      );
      // 입력폼 최기화 X
      return -1;
    } else {
      sortedSetCountries([...countries, newData]);
      return 1;
    }
  };

  // 업데이트 함수
  const updateCountryHandler = (newData) => {
    console.log("countries =>", countries);
    if (countries.some((item) => item.country === newData.country)) {
      // index 찾기
      const target_index = countries.findIndex(
        (item) => item.country === newData.country
      );

      // 정보 업데이트 (기존 데이터 지우고 새로운 데이터 추가)
      const updated_countries = countries.filter((_, index) => {
        return index !== target_index;
      });
      sortedSetCountries([...updated_countries, newData]);

      return 1;
    } else {
      alert(
        `등록된 국가가 아닙니다.\n새로운 국가 등록을 원하시면 추가를 눌러주세요.`
      );
      return -1;
    }
  };

  // 삭제 함수
  const deleteCountryHandler = (targetData) => {
    const deletedCountries = countries.filter((data) => {
      return data.country !== targetData.country;
    });

    sortedSetCountries(deletedCountries);
  };

  // useState()가 비동기라 바로 결과를 보려면 필요
  // 정렬 모드가 바뀌었을때 필요
  useEffect(() => {
    if (sortMode) {
      sortedSetCountries([...countries]);
    }
  }, [sortMode]);

  // 정렬 모드 변환시 Re-render
  const sortChangeHandler = (mode) => {
    setSortMode(mode);
  };

  return (
    <>
      <MedalForm
        addCountryHandler={addCountryHandler}
        updateCountryHandler={updateCountryHandler}
      />
      <Table
        key={tableKey}
        countries={countries}
        deleteCountryHandler={deleteCountryHandler}
        sortMode={sortMode}
        sortHandler={sortChangeHandler}
      />
    </>
  );
}

export default MedalData;
