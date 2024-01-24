import { useContext, useEffect } from "react";
import "./board.css";
import { AppContext } from "../../context";
const Board = () => {
  const { datas, setDatas, setActive } = useContext(AppContext);

  const handleChange = (id) => {
    const newDatas = datas.map((item) => {
      if (item.id === id) {
        setActive(item.title);
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });

    setDatas(newDatas);
  };

  useEffect(() => {}, [datas]);
  return (
    <main className="board-main">
      {datas.map((item) => {
        return (
          <div
            key={item.id}
            className={!item.active ? "item-board" : "item-board-active"}
            onClick={() => handleChange(item.id)}
          >
            <img src={!item.active ? item.img : item.imgb} alt={item.title} />
            <div
              className={
                !item.active ? "board-item-title" : "board-item-title-lit"
              }
            >
              {item.title}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Board;
