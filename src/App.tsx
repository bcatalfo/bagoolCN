import Card from "./card";
import PrimaryButton from "./primary-button";

export default function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-3xl m-4">Welcome to bagoolCN!</h1>
      <h2 className="text-2xl m-3">Check out our components</h2>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          PrimaryButton
          <PrimaryButton> Press me </PrimaryButton>
        </Card>
        <Card> SecondaryButton </Card>
        <Card> LogoButton </Card>
        <Card> Header </Card>
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
      </div>
    </div>
  );
}
