const ContentTypeWriter = ({ text, className, speed = 150, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('')
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index))
          index++
        } else {
          clearInterval(interval)
        }
      }, speed)
      
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return (
    <span className={className}>{displayedText}</span>
  )
}

export default ContentTypeWriter