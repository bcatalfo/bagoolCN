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
  [
    <Button backgroundColor="yellow" borderColor="black">
      I'm a button click on me!
    </Button>,
    <>
      <div className="flex">
        <span className="text-blue-500">{`<Button `}</span>
        <span className="text-orange-500">{`backgroundColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"yellow"`}</span>
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
    <Button
      backgroundColor="black"
      borderColor="black"
      textColor="white"
      variant="square"
    >
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
        <span className="text-green-500">{`"black"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`textColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"white"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`variant`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"square"`}</span>
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
    <Button
      backgroundColor="white"
      borderColor="black"
      textColor="black"
      variant="square"
    >
      I'm a button click on me!
    </Button>,
    <>
      <div className="flex">
        <span className="text-blue-500">{`<Button `}</span>
        <span className="text-orange-500">{`backgroundColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"white"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`borderColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"black"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`textColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"black"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`variant`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"square"`}</span>
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
    <Button
      backgroundColor="yellow"
      backgroundColorOnHover="lightyellow"
      borderColor="black"
      borderColorOnHover="steelblue"
      variant="action"
    >
      I'm a button!
    </Button>,
    <>
      <div className="flex">
        <span className="text-blue-500">{`<Button `}</span>
        <span className="text-orange-500">{`backgroundColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"yellow"`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`<Button `}</span>
        <span className="text-orange-500">{`backgroundColorOnHover`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"lightyellow"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`borderColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"black"`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`<Button `}</span>
        <span className="text-orange-500">{`borderColorOnHover`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"steelblue"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`variant`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"action"`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`>`}</span>
      </div>
      <div className="flex ml-10">
        <span className="text-slate-800">{`I'm a button!`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`</Button>`}</span>
      </div>
    </>,
  ],
  [
    <Button
      backgroundColor="chartreuse"
      backgroundColorOnHover="aquamarine"
      borderColor="black"
      borderColorOnHover="blueviolet"
      variant="action"
    >
      I'm a button!
    </Button>,
    <>
      <div className="flex">
        <span className="text-blue-500">{`<Button `}</span>
        <span className="text-orange-500">{`backgroundColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"chartreuse"`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`<Button `}</span>
        <span className="text-orange-500">{`backgroundColorOnHover`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"aquamarine"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`borderColor`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"black"`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`<Button `}</span>
        <span className="text-orange-500">{`borderColorOnHover`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"blueviolet"`}</span>
      </div>
      <div className="flex ml-19">
        <span className="text-orange-500">{`variant`}</span>
        <span className="text-red-500">{`=`}</span>
        <span className="text-green-500">{`"action"`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`>`}</span>
      </div>
      <div className="flex ml-10">
        <span className="text-slate-800">{`I'm a button!`}</span>
      </div>
      <div className="flex">
        <span className="text-blue-500">{`</Button>`}</span>
      </div>
    </>,
  ],
  [
    <Button
      backgroundColor="black"
      backgroundColorOnHover="darkslategrey"
      borderColor="black"
      borderColorOnHover="dodgerblue"
      textColor="white"
      variant="action"
    >
      I'm a button click on me!
    </Button>,
  ],
  [
    <Button
      backgroundColor="black"
      borderColor="bisque"
      textColor="chartreuse"
      variant="goober"
    >
      I'm a button click on me!
    </Button>,
  ],
  [
    <Button
      backgroundColor="blue"
      borderColor="oklch(0.637 0.237 25.331)"
      textColor="white"
      variant="goober"
    >
      I'm a button click on me!
    </Button>,
  ],
  [
    <Button
      backgroundColor="orange"
      borderColor="black"
      textColor="black"
      variant="goober"
    >
      I'm a button click on me!
    </Button>,
  ],
];
