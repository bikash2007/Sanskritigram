import { faAngleRight, faArrowRightToCity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Home = () => {

    const websites = [
        {
            name: 'Hansadhwani Theater',
            photo: 'https://hansadhwani.sanskritigram.org/assets/kid-_6PGJwCb.jpg',
            link:'https://hansadhwani.sanskritigram.org/'
        },
        {
            name: 'Coming soon',
            photo: 'https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?t=st=1733647251~exp=1733650851~hmac=db1c0eb894aba3617cea14be866db5be1bdf214f81f80d57f40707382b4cfe01&w=740',
            link:''
        },
        {
            name: 'coming soon',
            photo: 'https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?t=st=1733647371~exp=1733650971~hmac=881dc58c0a4f6c737b81bcf544f024ddfa0dfc217302922624f6ada6d64ba07b&w=740',
            link:''
        }
    ]

  return (
      <div className='w-full h-screen  flex gap-10 justify-center flex-wrap text-white items-center '>
      <div className=" inset-0 -z-10 h-screen fixed w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          
          {websites.map((items) => (
                  
              <a href={`${items.link}`} target='_main' className='h-96 w-72 relative rounded-lg flex items-end hover:scale-105 duration-200 active:scale-95 ' style={{background:`url(${items.photo})`,backgroundPosition:'center',backgroundSize:'cover'}}>
                    <div className='p-2'>
                      <h2 className='font-semibold'>{items.name}</h2>
                    <FontAwesomeIcon icon={faAngleRight} className='text-white z-10 absolute bottom-2 right-2'/>
                    </div>
                </a>
              ))}
                

    </div>
  )
}

export default Home