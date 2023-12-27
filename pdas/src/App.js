import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import alexaImage from "./images/alexa.png";
import cortanaImage from "./images/cortana.png";
import siriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <h1 className='title'>Personal Digital Assistants</h1>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <article className='column is-4'>
              <ProfileCard 
              title = "Alexa" 
              handle = "@alexa99" 
              image = {alexaImage} 
              content = "Alexa was created by Amazon."/>
            </article>
            <article className='column is-4'>
              <ProfileCard 
              title = "Cortana" 
              handle = "@cortana32" 
              image = {cortanaImage}
              content = "Cortana was made by Microsoft"/>
            </article>
            <article className='column is-4'>
              <ProfileCard 
              title = "Siri" 
              handle = "@siri01" 
              image = {siriImage}
              content = "Siri was made by Apple"/>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;