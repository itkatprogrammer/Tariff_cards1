import st from "./Tarif.module.scss";

export default function Tarif(props) {
  return (
    <div
      className={st.card}
      style={{
        transform: props.price == "550руб/мес" ? "scale(1.1)" : "scale(1)",
      }}
    >
      <p
        className={st.name}
        style={{ backgroundColor: props.color_name, color: "white" }}
      >
        {props.name}
      </p>
      <h2
        className={st.price}
        style={{
          backgroundColor: props.color_price,
          color: "white",
        }}
      >
        {props.price}
      </h2>
      <p className={st.speed}>{props.speed}</p>
      <p className={st.limits}>
        Объем включенного <br /> трафика не ограничен
      </p>
    </div>
  );
}
