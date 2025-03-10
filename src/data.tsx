import Button from "./button";

export const buttonList: React.ReactNode[][] = [
  [
    <Button backgroundColor="lawngreen" borderColor="black">
      I'm a button click on me!
    </Button>,
    <>
      <div className="flex">
        <span className="text-blue-500">{`<Button `}</span>
        <span className="text-orange-500">{`backgroundColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"lawngreen"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`borderColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"black"`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`>`}</span>
      </div>
      <div className="flex ml-10">
        <span className="text-slate-800">{`I'm a button click on me!`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`</Button>`}</span>
      </div>
    </>,
  ],
  [
    <Button backgroundColor="black" borderColor="orange" textColor="white">
      I'm a button click on me!
    </Button>,
    <>
      <div className="flex">
        <span className="text-blue-500">{`<Button `}</span>
        <span className="text-orange-500">{`backgroundColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"black"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`borderColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"orange"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`textColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"white"`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`>`}</span>
      </div>
      <div className="flex ml-10">
        <span className="text-slate-800">{`I'm a button click on me!`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`</Button>`}</span>
      </div>
    </>,
  ],
];
