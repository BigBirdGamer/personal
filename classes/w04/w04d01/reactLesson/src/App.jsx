//? React Functional Component -> function -> ()
//? return JSX, string, array of jsx
import "./App.css";
//? import Card 1
import Card1 from "./cards/Card1";
import data from "./cards/data";

//? pass info from App -> Card1
//? App is the parent of Card1 -> pass info using props

const buildImages = () => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const card = <Card1 url={item.img} title={item.title} text={item.text} />;
    // return card;
    result.push(card);
  }
  return result;
};

function App() {
  const arr = [
    <Card1 url={data[1].img} title={data[1].title} text={data[1].text} />,
    <Card1 url={data[0].img} title={data[0].title} text={data[0].text} />,
  ];

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">{buildImages()}</section>
    </div>
  );
}

export default App;
