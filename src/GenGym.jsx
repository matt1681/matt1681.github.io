import './index.css';
import './w3.css';
import './rubik.css';
import './w3-theme-black.css';
import Footer from './footer';

function GenGym(){
    
    return(
        <>
        <head>
        <title>General Gym</title>
        </head>
        <br/>
        <div class="banner"></div>
        <div class="w3-main">
        <div class="w3-row w3-padding-16">
          <div class="w3-container info-container">
            <h1 class="center">General Gym Information: Know Before You Go</h1>
            <br/>
            <h2>Making The Gym a Welcome Space for Everyone</h2>
            <p>Gyms are built to accommodate people of all fitness levels, from complete beginners to seasoned athletes. Despite the intimidating atmosphere some newcomers may feel, most gym-goers focus on their routines rather than judging others. Proper gym etiquette—such as reracking weights, wiping down equipment, and allowing others to use machines between sets—helps create a positive environment. Additionally, gyms vary in equipment and amenities, so exploring different sections, including free weights, machines, and cardio areas, is beneficial to find what works best for your fitness goals.</p>
            <h2>The Foundations of an Effective Workout Routine</h2>
            <p>When it comes to working out, consistency and progression are key. Many beginners make the mistake of doing too much too soon, leading to burnout or injury. A structured program that includes strength training and cardiovascular exercise is essential. The principle of progressive overload—gradually increasing weight, reps, or intensity—ensures continuous improvement over time. Recovery is just as important as the workouts; muscles grow when given adequate rest, proper nutrition, and sufficient hydration.</p>
            <h2>Fitness: A Lifelong Journey of Progress and Well-Being</h2>
            <p>Fitness is a long-term journey, not a quick fix. Setting realistic goals and tracking progress can help maintain motivation. While physical changes take time, improvements in strength, endurance, and overall well-being often come sooner than expected. Beyond aesthetics, regular exercise boosts mental health, energy levels, and confidence. Whether training for strength, weight loss, or general health, the key to success is finding a routine that is both effective and enjoyable, making fitness a sustainable part of everyday life.</p>
            </div>
        </div>
    </div>
        <Footer/>
        </>
    
    );
}

export default GenGym
