export const useFirst = () => {
  const second = useSecond()
  return useState('first', () => second)
}