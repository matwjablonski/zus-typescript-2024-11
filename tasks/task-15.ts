// Zdefiniuj typ warunkowy IsString<T>, który:
// Jeśli T jest typu string, zwraca true.
// W przeciwnym razie zwraca false.

type IsString<T> = T extends string ? true : false;
