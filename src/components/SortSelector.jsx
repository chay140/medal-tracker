
function SortSelector({ sortMode, sortHandler }) {
  const changeHandler = (e) => {
    sortHandler(e.target.value);
  };

  return (
    <div className="select-wrapper">
      <select value={sortMode}  onChange={changeHandler}>
        <option value="byMedal">금은동 순위</option>
        <option value="byTotal">총 메달 순위</option>
      </select>
    </div>
  );
}

export default SortSelector
