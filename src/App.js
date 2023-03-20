import "./styles.css";

export default function App() {
  console.clear();

  const today = new Date().getTime();
  const dayInMilliseconds = 1000 * 60 * 60 * 24;

  console.log(dayInMilliseconds);

  const arr = new Array(101)
    .fill(0)
    .map((x, index) => index)
    .filter((x) => x % 2 === 0)
    .map((x, index) => new Date(today - dayInMilliseconds * x));

  console.log(arr);

  const randomValues = arr.map((date) => ({
    date,
    val: Math.floor(Math.random() * 51)
  }));

  console.log(randomValues);

  return (
    <div className="dots-container">
      {randomValues.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{
            left: `${index * 15}px`,
            bottom: `${window.innerHeight / 2 - dot.val}px`
          }}
        ></div>
      ))}
    </div>
  );
}
