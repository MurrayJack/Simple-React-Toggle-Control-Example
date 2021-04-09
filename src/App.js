import React, { useState } from "react";
import "./styles.css";

export const InternalButton = ({ caption, ...props }) => {
  return <button {...props}>{caption}</button>;
};

export const ButtonGroup = ({ children, onClick, selectedValue, compact }) => {
  return (
    <div className="group">
      {React.Children.map(children, (child) => (
        <InternalButton
          style={{ padding: compact ? "10px" : "40px" }}
          aria-selected={child.props.value === selectedValue}
          onClick={() => onClick(child.props.value)}
          {...child.props}
        />
      ))}
    </div>
  );
};

export const ButtonItem = () => <></>;

export default function App() {
  const [selValue, setSelValue] = useState("one");

  return (
    <>
      <ButtonGroup compact onClick={setSelValue} selectedValue={selValue}>
        <ButtonItem caption="One" value="one" />
        <ButtonItem caption="two" value="two" />
      </ButtonGroup>
    </>
  );
}
