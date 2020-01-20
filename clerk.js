https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

function tickets(peopleInLine){
    let fiftyCount = 0;
    let twentyFiveCount = 0;
    
    for (i = 0; i < peopleInLine.length; i++) {
        switch (peopleInLine[i]) {
            case 25:
                twentyFiveCount++;
          break;
          case 50:
              if (twentyFiveCount >= 1) {
                  fiftyCount++;
                  twentyFiveCount--;
              } else {
                  return 'NO';
              }
          break;
          case 100:
              if (fiftyCount >= 1 && twentyFiveCount>= 1) {
                  fiftyCount--;
                  twentyFiveCount--;
              } else if (twentyFiveCount>=3) {
                  twentyFiveCount -= 3;
              } else {
                  return 'NO';
              }
          }
  
      }
      return 'YES';
  }
  