function CountryInput({ country, countryInputHandler }) {
  return (
    <div className="country-input">
      <label>국가명</label>
      <input
        type="text"
        placeholder="국가 입력"
        value={country}
        onChange={countryInputHandler}
        required
      />
    </div>
  );
}

export default CountryInput;
