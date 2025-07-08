import { useEffect } from 'react'

const CursorSpotlight = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      document.body.style.setProperty('--mouse-x', `${x}%`)
      document.body.style.setProperty('--mouse-y', `${y}%`)
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="cursor-spotlight-blob hidden md:block fixed inset-0 pointer-events-none z-10 transition-opacity duration-300" />
  )
}

export default CursorSpotlight