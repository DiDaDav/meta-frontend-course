const cache: Map<Date, string[]> = new Map()

const seededRandom = (seed: number) => {
  const m = 2 ** 35 - 31
  const a = 185852
  let s = seed % m

  return () => (s = (s * a) % m) / m
}

const fetchApi = (date: Date): string[] => {
  if (cache.has(date)) {
    return cache.get(date) ?? []
  }
  const result = []
  const random = seededRandom(date.getDate())

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ':00')
    if (random() < 0.5) result.push(i + ':30')
  }

  cache.set(date, result)

  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const submitApi = (formData: any) => {
  console.log(formData)
  return true
}

export { fetchApi, submitApi }
