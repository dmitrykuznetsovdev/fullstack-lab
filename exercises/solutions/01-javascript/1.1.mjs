export function getAvailableSessions(sessions, minPlaces) {
  if (!Number.isInteger(minPlaces) || minPlaces <= 0) {
  throw new RangeError("minPlaces должен быть целым числом больше нуля");
}

return sessions.filter(
  (session) => session.freePlaces >= minPlaces
);
}
