import Button from "./Button";

function ButtonGroup({formUpdateHandler}) {
  return (
    <div className="button-group">
      <Button type="submit">국가 추가</Button>
      <Button type="button" onClick={formUpdateHandler}>업데이트</Button>
    </div>
  );
}

export default ButtonGroup;
