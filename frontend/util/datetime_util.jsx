export const getDayOfWeek = (date) => {
  switch (date.getDay()) {
    case 0:
      return "sun"
      break;
    case 1:
      return "mon"
      break;
    case 2:
      return "tue"
      break;
    case 3:
      return "wed"
      break;
    case 4:
      return "thu"
      break;
    case 5:
      return "fri"
      break;
    case 6:
      return "sat"
      break;
  }
}