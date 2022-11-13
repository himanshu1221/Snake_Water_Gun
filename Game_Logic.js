let user = prompt("Snake , Water  OR Gun ")
let logic = Math.floor(Math.random() * 3);
let logic2 = ["Snake", "Water", "Gun"][logic]
const match = (logic2, user) => {
  if (logic2 === user) {
    return "draw"
  }
  else if (logic2 === "Snake" && user === "Water") {
    return "Computer"
  }
  else if (logic2 === "Gun" && user === "Water") {
    return "User"
  }
  else if (logic2 === "Snake" && user === "Gun") {
    return "User"
  }
  else if (logic2 === "Gun" && user === "Snake") {
    return "Computer"
  }
  else if (logic2 === "Water" && user === "Snake") {
    return "User"
  }
  else if (logic2 === "Water" && user === "Gun") {
    return "Computer"
  }
}

let result = match(logic2, user)
document.write(`the winner is ${result}` + ` Where Computer was ${logic2} and User was ${user}`)
