import React, { useEffect, useState } from "react";
import MedalForm from "./MedalForm";
import Table from "./Table";

function MedalData() {
  // 국가별 데이터
  const [countries, setCountries] = useState([]);

  // 처음 렌더시
  // localStorage 체크해서 데이터 받아오기
  useEffect(() => {
    const storedCountries = localStorage.getItem("countries");
    // console.log("check point 0");
    // 존재할시 setCountries
    if (storedCountries) {
      console.log("check point 1");

      setCountries(JSON.parse(storedCountries));
    }
  }, []);

  // updatLocalStorage ->> setCountry 혹은 업데이트 로직이 있을 때 실행
  const updateLocalStorage = (updatedCountries) => {
    localStorage.setItem("countries", JSON.stringify(updatedCountries));
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
      setCountries([...countries, newData]);
      updateLocalStorage([...countries, newData]);
      return 1;
    }
  };

  // 업데이트 함수
  const updateCountryHandler = (newData) => {
    console.log("countries =>", countries);
    if (countries.some((item) => item.country === newData.country)) {
      // index 찾기
      const targetIndex = countries.findIndex(
        (item) => item.country === newData.country
      );

      // 정보 업데이트 (기존 데이터 지우고 새로운 데이터 추가)
      const updatedCountries = countries.filter((_, index) => {
        return index !== targetIndex;
      });
      setCountries([...updatedCountries, newData]);
      updateLocalStorage([...updatedCountries, newData]);

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

    setCountries(deletedCountries);
    updateLocalStorage(deletedCountries);
  };

  // 노트: useEffect 수가 많아지는 경우라면
  // 컴포넌트 분리가 필요한지 아닌지 확인해보자

  return (
    <>
      <MedalForm
        addCountryHandler={addCountryHandler}
        updateCountryHandler={updateCountryHandler}
      />
      <Table
        countries={countries}
        deleteCountryHandler={deleteCountryHandler}
      />
    </>
  );
}

export default MedalData;
