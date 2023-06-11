import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
function Sertifikat() {
  const Data = [
    {
      id: 1,
      serti: require('../assets/img/serti1.jpg'),
    },
    {
      id: 2,
      serti: require('../assets/img/serti2.jpg'),
    },
    {
      id: 3,
      serti: require('../assets/img/serti3.jpg'),
    },
  ]
  return (
    <div className="xs:overflow-y-scroll xs:h-[80vh] xs:py-2 sm:overflow-y-scroll sm:h-[80vh] sm:py-2 md:overflow-y-scroll md:h-[83vh] md:py-2 ">
      <div className="grid xxl:grid-cols-3 xxl:mx-[6%] xxl:gap-x-[3%] xxl:mt-[4%] xl:grid-cols-3 xl:mx-[6%] xl:gap-x-[3%] xl:mt-[4%] xs:grid-cols-1 xs:mx-[10%] xs:gap-y-4 sm:grid-cols-1 sm:mx-[10%] sm:gap-y-4  md:grid-cols-1 md:mx-[10%] md:gap-y-4 lg:grid-cols-2 lg:mx-[5%] lg:gap-4">
        {Data.map((item, key) => (
          <LazyLoadImage key={key} effect="blur" className="xxl:w-full xxl:h-[40vh] xl:w-full xl:h-[40vh]  lg:w-full lg:h-[40vh] " src={item.serti} />
        ))}
      </div>
    </div>
  )
}

export default Sertifikat
