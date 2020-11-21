export const asArray = (events) => (
  Object.keys(events).map(key => events[key])
);
