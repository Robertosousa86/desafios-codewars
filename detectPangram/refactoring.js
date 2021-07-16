function isPangram(string) {
  return [...'abcdefghijklmnopqrstuvwxyz'].every((e) =>
    string.toLowerCase().includes(e)
  );
}