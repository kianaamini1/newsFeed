import React, { useState } from 'react';
import './index.css'; 
import news_feed from './sample_news_stories.json'; 

function App() {
 
  const [stories, setStories] = useState(news_feed.results);

  const handleRemove = (index) => {
    const updatedStories = [...stories];
    updatedStories.splice(index, 1); 
    setStories(updatedStories); 
  };

  return (
    <div className="App">
      <h1>News Feed</h1>
      <div className="feed">
        {stories.map((story, index) => (
          <div key={index} className="story">
            
            <div className="story_image">
              {story.image_url ? (
                <img src={story.image_url} alt={story.title} />
              ) : (
                <img src="https://placehold.co/140x125?text=News+Story" alt="placeholder" />
              )}
            </div>

            <div className="story_content">
              <div className="story_header">
                <h1>
                  <a href={story.link} target="_blank" rel="noopener noreferrer">
                    {story.title}
                  </a>
                </h1>

                <span className="story_creator">
                  By: {story.creator && story.creator.length > 0 ? story.creator[0] : 'Unknown'}
                </span>
              </div>

              
              <p className="story_keywords">
                {story.keywords && story.keywords.join(", ")}
              </p>

              <span className="delete" onClick={() => handleRemove(index)}>
                ✖
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
