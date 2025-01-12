function Portfolio() {
  //   const a = {
  //     name: "asim",
  //   };
  //   const name = <div>name:{a.name}</div>;
  //  const b = {
  //     name: "mohan",
  //   };
  //   const name2=<div>name:{b.name}</div>
  // const arr=[name, name2];
  //   array.forEach(element => {

  //   });
  const arr = [
    {
      name: "asim",
    },
    {
      name: "bijen",
    },
  ];
  return (
    <div>
      Portfolio
      <div>
        {arr.forEach((element) => {
          return <>
          {
            element.name
          }
          </>;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
