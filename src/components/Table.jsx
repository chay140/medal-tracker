import React from "react";
import Button from "./Button";
import SortSelector from "./SortSelector";

function Table({ countries, deleteCountryHandler, sortHandler, sortMode }) {
  if (countries.length === 0) {
    return (
      <div>
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요.</p>
      </div>
    );
  }

  // 결과 정렬
  const finalList = countries.map((data, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{data.country}</td>
        <td>{data.gold}</td>
        <td>{data.silver}</td>
        <td>{data.bronze}</td>
        <td>
          <Button
            className="delete"
            onClick={() => {
              deleteCountryHandler(data);
            }}
          >
            삭제
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <SortSelector sortMode={sortMode} sortHandler={sortHandler} />
            </th>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{finalList}</tbody>
      </table>
    </div>
  );
}

export default Table;
