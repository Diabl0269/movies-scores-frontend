export default async (setLoaderDisplay, setData, fetchFuction) => {
    setLoaderDisplay(true)
    const data = await fetchFuction()
    setData(data)
    setLoaderDisplay(false)
  }