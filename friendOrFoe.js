function friend(friends){
    let mates = [];
    for (i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            mates.push(friends[i]);
        }
        return mates;
    }
  }