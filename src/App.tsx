import Card from "./card";
import Button from "./button";
import Title from "./title";

export default function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-3xl m-4">Welcome to bagoolCN!</h1>
      <h2 className="text-2xl m-3">Check out our components</h2>
      <div className="grid gird-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <Title> Button </Title>
          <Button backgroundColor="lawngreen" borderColor="black">
            I'm a button click on me!
          </Button>
          <Button
            backgroundColor="black"
            borderColor="orange"
            textColor="white"
          >
            I'm a button click on me!
          </Button>
          <Button backgroundColor="yellow" borderColor="black">
            I'm a button click on me!
          </Button>
          <Button
            backgroundColor="black"
            borderColor="black"
            textColor="white"
            variant="square"
          >
            I'm a button click on me!
          </Button>
          <Button
            backgroundColor="white"
            borderColor="black"
            textColor="black"
            variant="square"
          >
            I'm a button click on me!
          </Button>
          <Button
            backgroundColor="yellow"
            backgroundColorOnHover="lightyellow"
            borderColor="black"
            borderColorOnHover="steelblue"
            variant="action"
          >
            I'm a button click on me!
          </Button>
          <Button
            backgroundColor="chartreuse"
            backgroundColorOnHover="aquamarine"
            borderColor="black"
            borderColorOnHover="blueviolet"
            variant="action"
          >
            I'm a button click on me!
          </Button>
          <Button
            backgroundColor="black"
            backgroundColorOnHover="darkslategrey"
            borderColor="black"
            borderColorOnHover="dodgerblue"
            textColor="white"
            variant="action"
          >
            I'm a button click on me!
          </Button>
          <Button
            backgroundColor="black"
            borderColor="bisque"
            textColor="chartreuse"
            variant="goober"
          >
            I'm a button click on me!
          </Button>
          <Button
            backgroundColor="blue"
            borderColor="oklch(0.637 0.237 25.331)"
            textColor="white"
            variant="goober"
          >
            I'm a button click on me!
          </Button>
          <Button
            backgroundColor="orange"
            borderColor="black"
            textColor="black"
            variant="goober"
          >
            I'm a button click on me!
          </Button>
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
