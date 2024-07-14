import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Background from './Components/Background/Background';
import Hero from './Components/Hero/Hero'
const App= ()=> {
 let heroData =[
  {text1:'Dive into', text2:'What you love'},
  {text1:'Indulge', text2:'Your Passions'},
  {text1:'Give in to', text2:'your passions'}
 ]
 const[heroCount, setHeroCount] = useState(0);
 const[playStatus, setPlayStatus] = useState(false)

 useEffect(()=>{
  setInterval(()=>{
    setHeroCount((count)=>{return count===2?0:count+1})
  },3000)
 },[])
  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]} 
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}/>

    </>
  )
}

export default App