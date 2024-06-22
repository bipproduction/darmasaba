const listData = Array.from({ length: 2 }).map(() => (
    Array.from({ length: 10 }).reduce((acc, _, index) => {
      acc[index] = index;
      return acc;
    }, {})
  ));
  
  console.log(JSON.stringify(listData, null, 2));