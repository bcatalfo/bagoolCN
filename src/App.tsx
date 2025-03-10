import Card from "./card";
import Title from "./title";
import { buttonList } from "./data";
import Button from "./button";
import { useState } from "react";

export default function App() {
  const [numButtons, setNumButtons] = useState(3);
  const toggleButtonListSize = () => {
    if (numButtons == 3) {
      setNumButtons(buttonList.length);
    }
    if (numButtons == buttonList.length) {
      setNumButtons(3);
    }
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-3xl m-4">Welcome to bagoolCN!</h1>
      <h2 className="text-2xl m-3">Check out our components</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 m-3 lg:w-3/4">
        <Card>
          <Title> Button </Title>
          {buttonList.slice(0, numButtons).map(([button, buttonCode]) => (
            <>
              <div className="flex flex-col lg:flex-row gap-2 items-center">
                <div className="flex grow-1 h-18 lg:h-15 m-2">{button}</div>
                <pre className="flex grow-2 m-2">
                  <code>{buttonCode}</code>
                </pre>
              </div>
              <hr className="border-slate-700" />
            </>
          ))}
          <div className="flex justify-center">
            <div className="h-18 lg:h-15 ">
              <Button
                backgroundColor="orange"
                borderColor="black"
                onClick={() => toggleButtonListSize()}
              >
                Show more
              </Button>
            </div>
          </div>
        </Card>
        <Card> Tabs </Card>
        <Card> Hero </Card>
        <Card> Search </Card>
        <Card> Slider </Card>
        <Card> Card </Card>
        <Card> Section </Card>
        <Card> Dropdown </Card>
        <Card> Carousel </Card>
        <Card> Label </Card>
        <Card> Link </Card>
        <Card> Title </Card>
        <Card> Subtitle </Card>
        <Card> Table </Card>
        <Card> Accordion </Card>
        <Card> Alert </Card>
        <Card> Dialog </Card>
        <Card> Calendar </Card>
        <Card> Chart </Card>
        <Card> Checkbox </Card>
        <Card> Input </Card>
        <Card> Pagionation </Card>
        <Card> Progress </Card>
        <Card> Radio Group </Card>
        <Card> Select </Card>
        <Card> Separator </Card>
        <Card> Sidebar </Card>
        <Card> Switch </Card>
        <Card> Toast </Card>
        <Card> Notification </Card>
      </div>
    </div>
  );
}
