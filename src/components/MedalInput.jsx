function MedalInput({medal, label, medalInputHandler}) {
  return (
    <div className="number-input">
      <label>{label}</label>
      <input
        type="number"
        placeholder="0"
        value={medal}
        onChange={medalInputHandler}
        min="0"
        max="99"
      />
    </div>
  );
}

export default MedalInput;
