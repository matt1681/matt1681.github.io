import './index.css';
import './w3.css';
import './rubik.css';
import './w3-theme-black.css';
import Footer from './footer.jsx';

function Home() {
    return(
      <>
      <head>
      <title>Starting Strength</title>
      </head> 
        <br/>
        <div class="banner"></div>
        <div class="w3-main">
        <div class="w3-row w3-padding-16">
          <div class="w3-container info-container">
            <h1 class="center">Strength Training: What You Need to Know</h1>
            <div class="w3-container">
              <p class="w3-border w3-padding-small w3-padding-16 w3-center image1"></p>
              <p class="center"><sub>Image by Microsoft Designer. <a href="https://designer.microsoft.com">designer.microsoft.com</a></sub></p>
            </div>
            <h2>Why Does Strength Training Matter?</h2>
            <p>Strength training is essential for everyone, regardless of age or fitness level, because it builds muscle, strengthens bones, and improves overall health. Regular strength training boosts metabolism, helping with weight management and fat loss while enhancing endurance and daily functionality. It also reduces the risk of chronic diseases like osteoporosis, heart disease, and type 2 diabetes. Additionally, it improves mental health by reducing stress, anxiety, and depression while boosting confidence and resilience. Whether through bodyweight exercises, resistance bands, or lifting weights, strength training empowers individuals to live longer, healthier, and more active lives.</p>
            <h2>What Does This Guide Cover?</h2>
            <div class="oneline"><p><h6>General:</h6>   Information that should be known.</p></div>
            <br/>
            <div class="oneline"><p><h6>Example Workouts:</h6>   Example workouts to start with.</p></div>
            <br/>
            <div class="oneline"><p><h6>Nutrition & Recovery:</h6>   Discusses the importance of proper Nutrition and Recovery when strength training.</p></div>
            <br/>
            <div class="oneline"><p><h6>Proper Form:</h6>   What form is and why it is important.</p></div>
            <br/>
            <div class="oneline"><p><h6>Long-Term Planning:</h6>   Long-term considerations when strength training.</p></div>
            <br/>
            <div class="oneline"><p><h6>Tips:</h6>   A list of gym and life lessons.</p></div>
            <br/>
            <h3 class = "disclaimer">Disclaimer:</h3>
            <p class ="disclaimer">The information presented herein unless directly cited to an academic study or other official source should be interpreted as guidelines and not direct fitness advice from a doctor or other certified official.  The information presented herein has been gained through years of experience of going to the gym. Nothing more and nothing less.</p>
            </div>
        </div>
    </div>
    <Footer />
    </>   
    );
  }

  export default Home