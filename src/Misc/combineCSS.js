const combineCSS = function(obj1,obj2,obj3,obj4,obj5) {
  if (obj1 && obj2 && obj3 && obj4 && obj5) {
    return { ...obj1, ...obj2, ...obj3, ...obj4, ...obj5 }
  } else if (obj1 && obj2 && obj3 && obj4) {
    return { ...obj1, ...obj2, ...obj3, ...obj4 }
  } else if (obj1 && obj2 && obj3) {
    return { ...obj1, ...obj2, ...obj3 }
  } else if (obj1 && obj2) {
    return { ...obj1, ...obj2 }
  } else {
    return {content: 'no CSS selected'}
  }
}

// const combineCSS = (obj1,obj2,obj3,obj4,obj5) => {
//   if (args) {
//     return { ...obj1, ...obj2, ...obj3, ...obj4, ...obj5 }
//   }  else {
//     return {content: 'no CSS selected'}
//   }
// }

// export default combineCSS;
