import React from 'react'
import './Feed.css'
import Tweetbox from './Tweetbox.js'
import Post from './Post'

const Feed = () => {

  return (
    <div className='feed'>
      <div className='feed-header'>
          <h2>Home</h2>
      </div>
      <Tweetbox />

            <Post
            key={1}
            displayName= 'National Geography'
            username= 'nationalgeo'
            verified={true}
            text= 'Amazone Forest'
            avatar='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEUAAAD81gX82AP72gT/5iz41ABLPhXs0y3+2QMDAwX52gP82xm2oSYEAQEsJhDr0jdvZQ8DBAC3ozSEcxj/4BqfjB0BAAdyYw/91AD22gVGPxP11QCDcxj/3RC3ojQAAAodGQl6bRp0YhFpXxtKQhv/8kL33R775Bzs30np1iz/2h/mxBqnig2jih6wlRLw2BwvIQkOAAUsJgwUFQrXvBOKcRObgRLt10i7sEyrmz2qS/H8AAAEhklEQVR4nO2dfXPTOBCHLQmDreCmbotrEwJ3HKQH18LRe+Hu+3+x25XtpAWGa9b2SsP8nonjNtNaerwryfYf2SwDAAAAAAAAAAAAAAAAAAAAAAAAwA9BSa9y2QYq3lVZvWQr/9uLpllKs2GqqlmuhQdBhq+oC/xjNSOjIefJePwYdiFPK9rKOe1Gx7quKUHr7FU0QTbTaJtCqdDKNyG/8qefL09PL1+fzs7l5Wt+nf7CAyGeYZW9ebu7urq4WK0uZme329H2axZm7Xg8vsqtMa0h7IzQIVs6oLH5k7hrRZY9f5QXbdtaWxR9z+YzbT17Pll61X2Aoc33Vm4uu3CgjjaKYcQsLYPhxh+8HDODnhsMnd+8i2VHNBnNNGRI3THhpJOdJ3rPSexjuIpqGHhMWcr9oURtW+rSpuvsEMejlMbMdJZHtTe+8/SbtzwOoxsWfe8cGxrT59ixIRv3xjuamJ2nwyRkOMbLGM8BCJP8kXOq6f+ehh2HbuP98HkihsUwPVjji7CQiaGh13WUn54iaVw6htyV9hAx8VzaJ6ppOZacBvyJNakYBkHjKL82YT6VwP/YhjSncZiU4T5szndTr0W3q9X7LaeEKRIzDBO+W/12fX1z82wKNzfXHz56289TqRgWPCPYorXd7kP/ZGUav687ztV+pknCkHsSZohu9zT7VE57QEUXSiefO1p1ioQMC17H2NCTYTXxRoBuqm/XJNhfmiZlaFvnV3tD2ZMZfn5YZSdrXnx8YoZhhXZkWFaTRyIZ0mWpsckZ2jkN+co0OcM5Y1gkGUMYPpgwDj3fqcBQBRgKgKEyMBQAQ2VgKACGysBQAAyVgaEAGCoDQwEwVAaGAmCoDAwFwFAZGAqAoTIwFABDZWAoAIbKwFAADJWBoQAYKgNDATBUBoYCYKgMDAXAUBkYCoChMjAUAENlYCgAhsrAUAAMlYGhABgqA0MBMFQGhgJgqAwMBcBQGRgKgKEyMBQAQ2VgKACGysBQAAyVgaEAGCoDQwEwVAaGAmCoDAwFwFAZGAo4WZsEDUP5lWA47Zv1+evObxP+Pu/uaVZX9TSqPobpGs7AH+vWuRQNnXH5n3+dn5+/OJfyIvzr35vUsvRQWKYw22K7FdcnIcLbofRMOoaDZJ7TZrlmzEYAFyUJR8hTM7xfHuhO/wSEU5RcDK09VJPL87FCzPH0hvmdrE/FcOzRuDcTsO5eQiRmOIoaoWNfxeoeiRiO0ZutvGOyhiOTsjRVQzd3AIeZx9v2XdxKsuM1zV2/vtyj/WpMHWfY74JhFrdc7lD/cF722TpWB4xp+PxRboZTvp8R7bFjsdiPwTvjkTdfhBiWkYo6h9pVb96+3xGrBQgH3X3OPtVRax7f/vOSOZuZlwNnZ/9mVVzD5SmreOOwbJoyK8ONeVWFt8CkO/wva7HVWVNGK67e7M/scqe4bMokcnQhQwodZUncBb9ctH0ypAYiZShDw6MJmbqgJQ3FZc/id1m+4SAXNUuXP7uRDRXajh3D5fnxDQEAAAAAAAAAAAAAAAAAAAAAYDb+A8An0gopDASKAAAAAElFTkSuQmCC'
            image='https://mms.businesswire.com/media/20191119005767/en/757678/4/grand_canyon.jpg?download=1'
          />
            <Post
            key={2}
            displayName= 'Umair Khan'
            username= 'umairkhan'
            verified={false}
            text= 'New set on the way !!!'
            avatar='https://avatars.githubusercontent.com/u/81556052?v=4'
            image='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            />
    </div>
  )
}

export default Feed