import { useState } from 'react'
import axios from 'axios'
import ImageCard from './components/ImageCard'

const App = () => {

  const [images, setImages] = useState([])

  async function getImages() {
    try {
      const response = await axios.get('https://picsum.photos/v2/list')
      setImages(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='w-full min-h-screen p-10'>

      <button
        className='bg-blue-800 px-5 py-3 text-white rounded-md'
        onClick={getImages}
      >
        ADD
      </button>

      <div className="p-10 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>

    </div>
  )
}

export default App
