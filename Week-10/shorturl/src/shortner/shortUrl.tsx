import axios                from 'axios';
import React, { useState }  from 'react'
import "./shortUrl.css"
import UrlInput             from './urlInput'
import UrlList              from './urlList'

interface urlShortProps{
  text?: string;
  id?: any;
}


function ShortUrl(props: urlShortProps) {

  const [inputtext, setInputtext] = useState<urlShortProps[]>([])

  const handleAdd = async (enterText: string) => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${enterText}`
      );
      setInputtext((prevGoals) => {
        const updatedGoals = [...prevGoals];
        updatedGoals.unshift({
          text: response.data.result.full_short_link,
          id: Math.random().toString()
        });
        return updatedGoals;
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <section id="goal-form">
        <UrlInput onAdd={handleAdd} />
      </section>
      <section id="goals">
        <ul className="goal-list">
          
          {inputtext.map(goal => (
            <UrlList key={goal.id}>
              <a href={goal.text}>{goal.text}</a>
            </UrlList>
          ))}
        
        </ul>
      </section>
    </div>
  )
}

export default ShortUrl