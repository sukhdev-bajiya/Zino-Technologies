import React from "react";
import "./Home.css";

export default function Home() {
  const [redStack, setRedStack] = React.useState([]);
  const [blueStack, setBlueStack] = React.useState([]);
  const [greenStack, setGreenStack] = React.useState([]);
  const [blackStack, setBlackStack] = React.useState([]);
  const [itemValue, setItemValue] = React.useState("");
  const [editItem, setEditItem] = React.useState();

  // Red Stack Fun
  const addRedItem = () => {
    if (itemValue.length !== 0) {
      if (redStack.length < 8) {
        let arr = [...redStack];
        arr.push(itemValue);
        setRedStack(arr);
        setItemValue("");
      } else alert("Stack Is Full");
    } else alert("Enter your cart text");
  };
  const removeRedItem = (index) => {
    let arr = [...redStack];
    arr.splice(index, 1);
    setRedStack(arr);
  };

  // Blue Stack Fun
  const addBlueItem = () => {
    if (itemValue.length !== 0) {
      if (blueStack.length < 8) {
        let arr = [...blueStack];
        arr.push(itemValue);
        setBlueStack(arr);
        setItemValue("");
      } else alert("Stack Is Full");
    } else alert("Enter your cart text");
  };
  const removeBlueItem = (index) => {
    let arr = [...blueStack];
    arr.splice(index, 1);
    setBlueStack(arr);
  };

  // Green Stack Fun
  const addGreenItem = () => {
    if (itemValue.length !== 0) {
      if (greenStack.length < 8) {
        let arr = [...greenStack];
        arr.push(itemValue);
        setGreenStack(arr);
        setItemValue("");
      } else alert("Stack Is Full");
    } else alert("Enter your cart text");
  };
  const removeGreenItem = (index) => {
    let arr = [...greenStack];
    arr.splice(index, 1);
    setGreenStack(arr);
  };

  // Black Stack Fun
  const addBlackItem = () => {
    if (itemValue.length !== 0) {
      if (blackStack.length < 8) {
        let arr = [...blackStack];
        arr.push(itemValue);
        setBlackStack(arr);
        setItemValue("");
      } else alert("Stack Is Full");
    } else alert("Enter your cart text");
  };
  const removeBlackItem = (index) => {
    let arr = [...blackStack];
    arr.splice(index, 1);
    setBlackStack(arr);
  };

  const handleClickCheck = (e, stack, index) => {
    if (e.detail === 2) {
      let text;
      if (stack === "redStack") {
        text = redStack[index];
      } else if (stack === "blueStack") {
        text = blueStack[index];
      } else if (stack === "greenStack") {
        text = greenStack[index];
      } else if (stack === "blackStack") {
        text = blackStack[index];
      }
      setEditItem({ index, stack, text });
      setItemValue(text);
    }
  };

  const updateStackItem = (stack, index) => {
    if (stack === "redStack") {
      let arr = [...redStack];
      arr[index] = itemValue;
      setRedStack(arr);
    } else if (stack === "blueStack") {
      let arr = [...blueStack];
      arr[index] = itemValue;
      setBlueStack(arr);
    } else if (stack === "greenStack") {
      let arr = [...greenStack];
      arr[index] = itemValue;
      setGreenStack(arr);
    } else if (stack === "blackStack") {
      let arr = [...blackStack];
      arr[index] = itemValue;
      setBlackStack(arr);
    }
    setEditItem();
    setItemValue("");
  };

  const handleDragStart = (e, stack, ind) => {
    e.dataTransfer.setData("index", ind);
    e.dataTransfer.setData("stack", stack);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStack) => {
    let index = e.dataTransfer.getData("index");
    let stack = e.dataTransfer.getData("stack");

    if (stack === "redStack") {
      if (newStack === "blueStack" && blueStack.length < 8) {
        let obj = redStack.splice(index, 1);
        obj = [...obj, ...blueStack];
        setBlueStack(obj);
      } else if (newStack === "greenStack" && greenStack.length < 8) {
        let obj = redStack.splice(index, 1);
        obj = [...obj, ...greenStack];
        setGreenStack(obj);
      } else if (newStack === "blackStack" && blackStack.length < 8) {
        let obj = redStack.splice(index, 1);
        obj = [...obj, ...blackStack];
        setBlackStack(obj);
      } else if (newStack === "redStack") {
        console.log("same");
      } else {
        alert("Stack Is Full");
      }
    } else if (stack === "blueStack") {
      if (newStack === "redStack" && redStack.length < 8) {
        let obj = blueStack.splice(index, 1);
        obj = [...obj, ...redStack];
        setRedStack(obj);
      } else if (newStack === "greenStack" && greenStack.length < 8) {
        let obj = blueStack.splice(index, 1);
        obj = [...obj, ...greenStack];
        setGreenStack(obj);
      } else if (newStack === "blackStack" && blackStack.length < 8) {
        let obj = blueStack.splice(index, 1);
        obj = [...obj, ...blackStack];
        setBlackStack(obj);
      } else if (newStack === "blueStack") {
        console.log("Same");
      } else {
        alert("Stack Is Full");
      }
    } else if (stack === "greenStack") {
      if (newStack === "blueStack" && blueStack.length < 8) {
        let obj = greenStack.splice(index, 1);
        obj = [...obj, ...blueStack];
        setBlueStack(obj);
      } else if (newStack === "redStack" && redStack.length < 8) {
        let obj = greenStack.splice(index, 1);
        obj = [...obj, ...redStack];
        setRedStack(obj);
      } else if (newStack === "blackStack" && blackStack.length < 8) {
        let obj = greenStack.splice(index, 1);
        obj = [...obj, ...blackStack];
        setBlackStack(obj);
      } else if (newStack === "greenStack") {
        console.log("Same");
      } else {
        alert("Stack Is Full");
      }
    } else if (stack === "blackStack") {
      if (newStack === "blueStack" && blueStack.length < 8) {
        let obj = blackStack.splice(index, 1);
        obj = [...obj, ...blueStack];
        setBlueStack(obj);
      } else if (newStack === "greenStack" && greenStack.length < 8) {
        let obj = blackStack.splice(index, 1);
        obj = [...obj, ...greenStack];
        setGreenStack(obj);
      } else if (newStack === "redStack" && redStack.length < 8) {
        let obj = blackStack.splice(index, 1);
        obj = [...obj, ...redStack];
        setRedStack(obj);
      } else if (newStack === "blackStack") {
        console.log("Same");
      } else {
        alert("Stack Is Full");
      }
    }
  };

  const scrollItemUpDown = (stack, index, val) => {
    if (!val && index > 0) {
      if (stack === "redStack") {
        let arr = [...redStack];
        let tamp = arr[index];
        arr[index] = arr[index - 1];
        arr[index - 1] = tamp;
        setRedStack(arr);
      } else if (stack === "blueStack") {
        let arr = [...blueStack];
        let tamp = arr[index];
        arr[index] = arr[index - 1];
        arr[index - 1] = tamp;
        setBlueStack(arr);
      } else if (stack === "greenStack") {
        let arr = [...greenStack];
        let tamp = arr[index];
        arr[index] = arr[index - 1];
        arr[index - 1] = tamp;
        setGreenStack(arr);
      } else if (stack === "blackStack") {
        let arr = [...blackStack];
        let tamp = arr[index];
        arr[index] = arr[index - 1];
        arr[index - 1] = tamp;
        setBlackStack(arr);
      }
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
          placeholder="Enter your cart text"
        />
        <p>For adding card in stack click on Add Card button</p>
      </div>
      <div className="zino__homePage_body">
        {/* Red Stack */}
        <div className="zino__homePage_stackBody">
          <div>
            <span style={{ color: "red" }}>Red</span>
            <button onClick={addRedItem}>Add Card</button>
          </div>
          <div
            droppable="true"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "redStack")}
          >
            {redStack.map((el, index) => (
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, "redStack", index)}
                key={index}
                className="zino__homePage_stackItemBody"
                style={{ background: "red" }}
                onClick={(e) => handleClickCheck(e, "redStack", index)}
              >
                <div>{el}</div>
                <div>
                  <span
                    onClick={(e) => {
                      removeRedItem(index);
                      e.stopPropagation();
                    }}
                  >
                    X
                  </span>
                  <span
                    onClick={(e) => {
                      scrollItemUpDown("redStack", index, false);
                      e.stopPropagation();
                    }}
                  >
                    🠹
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blue Stack */}
        <div className="zino__homePage_stackBody">
          <div>
            <span style={{ color: "blue" }}>Blue</span>
            <button onClick={addBlueItem}>Add Card</button>
          </div>
          <div
            droppable="true"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "blueStack")}
          >
            {blueStack.map((el, index) => (
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, "blueStack", index)}
                key={index}
                className="zino__homePage_stackItemBody"
                style={{ background: "blue" }}
                onClick={(e) => handleClickCheck(e, "blueStack", index)}
              >
                <div>{el}</div>
                <div>
                  <span
                    onClick={(e) => {
                      removeBlueItem(index);
                      e.stopPropagation();
                    }}
                  >
                    X
                  </span>
                  <span
                    onClick={(e) => {
                      scrollItemUpDown("blueStack", index, false);
                      e.stopPropagation();
                    }}
                  >
                    🠹
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Green Stack */}
        <div className="zino__homePage_stackBody">
          <div>
            <span style={{ color: "green" }}>Green</span>
            <button onClick={addGreenItem}>Add Card</button>
          </div>
          <div
            droppable="true"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "greenStack")}
          >
            {greenStack.map((el, index) => (
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, "greenStack", index)}
                key={index}
                className="zino__homePage_stackItemBody"
                style={{ background: "green" }}
                onClick={(e) => handleClickCheck(e, "greenStack", index)}
              >
                <div>{el}</div>
                <div>
                  <span
                    onClick={(e) => {
                      removeGreenItem(index);
                      e.stopPropagation();
                    }}
                  >
                    X
                  </span>
                  <span
                    onClick={(e) => {
                      scrollItemUpDown("greenStack", index, false);
                      e.stopPropagation();
                    }}
                  >
                    🠹
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Black Stack */}
        <div className="zino__homePage_stackBody">
          <div>
            <span style={{ color: "black" }}>Black</span>
            <button onClick={addBlackItem}>Add Card</button>
          </div>
          <div
            droppable="true"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "blackStack")}
          >
            {blackStack.map((el, index) => (
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, "blackStack", index)}
                key={index}
                className="zino__homePage_stackItemBody"
                style={{ background: "black" }}
                onClick={(e) => handleClickCheck(e, "blackStack", index)}
              >
                <div>{el}</div>
                <div>
                  <span
                    onClick={(e) => {
                      removeBlackItem(index);
                      e.stopPropagation();
                    }}
                  >
                    X
                  </span>
                  <span
                    onClick={(e) => {
                      scrollItemUpDown("blackStack", index, false);
                      e.stopPropagation();
                    }}
                  >
                    🠹
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p>Double click on item for edit item data</p>

      {/* Update Stack Item Data */}
      {editItem && (
        <div className="zino__homePage_stackItemUpadateDataBody">
          <div className="zino__homePage_stackItemUpadateDataForm">
            <h1>Update {editItem.stack} Item Data</h1>
            <input
              type="text"
              value={itemValue}
              onChange={(e) => setItemValue(e.target.value)}
            />
            <div>
              <button
                onClick={() => {
                  setEditItem();
                  setItemValue("");
                }}
              >
                Close
              </button>
              <button
                onClick={() => updateStackItem(editItem.stack, editItem.index)}
              >
                Update Item
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
