import React, { useState, useEffect } from 'react';



import Header from './header';
import { MdFavorite } from 'react-icons/md';
import { MdFeaturedVideo } from 'react-icons/md';
import { BsCardChecklist } from 'react-icons/bs';
import { CgMoreR } from 'react-icons/cg';

//const url1 = 'https://course-api.com/react-tours-project';
//const url = 'https://course-api.com/react-tabs-project';
const url1 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//const url1 = "https://api.themoviedb.org/3/movie/550?api_key=c64b4db5556875356b11700437a6c544";
const url2 = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const url3 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const url4 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&with_genres=";
function App() {



  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState("");
  const [url, setUrl] = useState(url1);
  const [bool, setBool] = useState(false);
  const [value, setValue] = useState(1);
  const [show, setShow] = useState(false);
  const [sh, setSh] = useState(false);
  const [val, setVal] = useState('');
   const [movies, setMovies] = useState([]);
   const [inp, setInp] = useState(false);
   const [vv, setVv] = useState('');
    const imgApi = "https://images.tmdb.org/t/p/w1280";

    useEffect(()=>{
   fetch(url3 + value)
   .then((res)=> res.json())
   .then((data)=>{
    setMovies(data.results);
   })
   
  },[]);

  if(search){
      fetch(url2 + search)
      .then((res) => res.json())
      .then((data)=>{
         setMovies(data.results); 
      });
     setSearch('');
  }
  if(val){
       fetch(url4 + val)
      .then((res) => res.json())
      .then((data)=>{
         setMovies(data.results); 
      });
      setVal('');
  }

  if(value){
     fetch(url3 + value)
      .then((res) => res.json())
      .then((data)=>{
         setMovies(data.results); 
      });
      setValue('');
  }
  const setVote = (vote_average)=>{
      if(vote_average >= 8){
          return 'green';
      }
      else if(vote_average > 5){
          return 'orange';
      }
      else{
          return 'red';
      }
  }

   const handleSubmit = (e)=>{
      e.preventDefault();
      setSearch(temp);
  } 

  const handleChange = (e)=>{
    setTemp(e.target.value)
  }

    const handleClick1=(e)=>{
    e.preventDefault();
    setValue(e.target.name.toLowerCase());
  }

  const handleTrans = (show)=>{
        if(show){
            return 'tran';
        }
    }

    const handleSh = (e)=>{
        e.preventDefault();
        setSh(!sh);
    }

    const handleCteg = (e)=>{
        e.preventDefault();
        setVal(e.target.name);
    }
      const handleClick=()=>{
        setShow(!show);

    }

    const handleInput = (e)=>{
      e.preventDefault();
      setInp(true);
    }

    const handleCh = (e)=>{
      setVv(e.target.value);
    }
    const handleSub = (e)=>{
      e.preventDefault();
      setValue(vv);
      setInp(false);
    }

   const handleFea = (e)=>{
    e.preventDefault();
    setValue(1);
   }

  return(
   
      <section className="m-container">
       <Header />
       <div className="c2">
      <div className="sbar">
         <section className="s-s-section">
        
        <div className="hamburger"
        onClick={handleClick}>
            <span className="line0 lin"></span>
            <span className="line1 lin"></span>
            <span className="line2 lin"></span>
        </div>
        {show && 
        <div className={`hidden-menu hidden-${handleTrans(show)}`}>
        <div className="s-links1 ">
        <span className="s-link1">

        <ul className="nav-links">
            <li className="nav-link">
            <span className="parent-sub ps1">
            <a href="#" onClick={handleSh}>Categories</a>
        <span className="icons">
        < BsCardChecklist/>
        </span>
            </span>
            {sh &&
        <ul className="sub-links">
            <li><a name='18' onClick={handleCteg}>Drama</a></li>
            <li><a name='12' onClick={handleCteg}>Adventure</a></li>
            <li><a name='28' onClick={handleCteg}>Action</a></li>
            <li><a name='10751' onClick={handleCteg}>Family</a></li>
            <li><a name='35' onClick={handleCteg}>Comedy</a></li>
            <li><a name='27' onClick={handleCteg}>Horror</a></li>
        </ul>}
            </li>
        </ul>
        
        </span>
        <span className="s-link1"><a  onClick={handleFea} href="#">Featured </a><span className="icons"><MdFeaturedVideo /></span></span>
        <span className="s-link1"><a  href="#">Favorites</a><span className="icons"><MdFavorite /></span></span>
        <span className="s-link1"><a  href="#">Others</a><span className="icons">< CgMoreR /></span></span>
            
            </div>
        </div>}

        <div className="s-bar-section">
        <div className="s-links">
        <span className="s-link1">

        <ul className="nav-links">
            <li className="nav-link">
            <span className="parent-sub">
            <a href="#" onClick={handleSh}>Categories</a>
        <span className="icons">
        < BsCardChecklist/>
        </span>
            </span>
            {sh &&
        <ul className="sub-links">
            <li><a name='18' onClick={handleCteg}>Drama</a></li>
            <li><a name='12' onClick={handleCteg}>Adventure</a></li>
            <li><a name='28' onClick={handleCteg}>Action</a></li>
            <li><a name='10751' onClick={handleCteg}>Family</a></li>
            <li><a name='35' onClick={handleCteg}>Comedy</a></li>
            <li><a name='27' onClick={handleCteg}>Horror</a></li>
        </ul>}
            </li>
        </ul>
        
        </span>
        
        <span className="s-link1"><a  onClick={handleFea} href="#">Featured</a><span className="icons"><MdFeaturedVideo /></span></span>
        <span className="s-link1"><a  href="#">Favorites</a><span className="icons"><MdFavorite /></span></span>
        <span className="s-link1"><a  href="#">Others</a><span className="icons">< CgMoreR /></span></span>
            
            
            </div>
             <div className="ads-space">
                    <h3>Ads space</h3>
            </div>
             <div className="ads-space">
                    <h3>Ads space</h3>
            </div>
            </div>
           
        </section>
       </div>
       <div className="mm">
       <div className="search">

          <form onSubmit={handleSubmit}>
          <input type="search" className="sea" placeholder="Search..."
          onChange={handleChange}
           />
          </form>
       </div>
       
       <div className="movies">
       {movies.map((ite) => {

    const {id, title, overview, poster_path,
     release_date, vote_average, original_title, genre_ids} = ite;
        
        
         
return(    
    
    <article className="movie-c">
    <div key={id} className="movie">
<div className="movie-image">
    <img  src={imgApi + poster_path} alt="" />
    </div>
        
        <div className="t">
            <span className="ttt">
            {title.length <= 16 ? title : title.substring(0, 15) + `...`}
            </span>
            <span className="dtt">
            <div className="dtt1">{release_date}</div>
            <div  className={`dtt2 rate-${setVote(vote_average)}`}>
            
            {vote_average}
            </div>
            </span>
            
        </div>
        <div className="info">
        <p>{overview}</p>
        </div>

        
         
    
    </div>

   
           
        </article>

)
    })}
           
       </div>
       <footer className="pages">
       {inp &&
        <form className="input" onSubmit={handleSub} >
        
         <input type="text" onChange={handleCh} placeholder="Page"/>
       
        </form>
       
       }
        <div className="pages-con">
       
            <button type="submit" className="btn1" name="1" onClick={handleClick1}>
            1
            </button>
            <button type="submit" className="btn1" name="2" onClick={handleClick1}>
            2
            </button>
            <button onClick={handleInput} type="submit" className="btn-input" >
              ...
            </button>
            <button type="submit" className="btn1" name="100" onClick={handleClick1}>
            100
            </button>
        </div>
    </footer>
       </div>
       </div>
       
  
    
   </section> 

  );

  }

export default App;
