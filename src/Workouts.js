import './index.css';
import './w3.css';
import './rubik.css';
import './w3-theme-black.css';
import Footer from './footer';

function Workouts() {
    return(
      <>
      <head>
      <title>Workouts</title>
      </head>
        <br/>
        <div class="banner"></div>
        <div class="w3-main">
        <div class="w3-row w3-padding-16">
          <div class="w3-container info-container">
            <h1 class="center">Working Out: What You Need To Know</h1>
            <br/>
            <h2>A Beginners Guide to Full-Body Strength Training</h2>
            <p>A great beginner weightlifting workout is a full-body routine performed three times a week. Start with compound movements that work multiple muscle groups, such as squats, bench presses, and rows. A simple routine could include squats (3x8), bench press (3x8), bent-over rows (3x10), overhead shoulder press (3x8), and planks (3x30 seconds). Rest for 60-90 seconds between sets and focus on maintaining proper form. Start with light weights and gradually increase them as you gain confidence and strength. This workout builds a strong foundation and develops overall muscular balance.</p>
            
            <h2>Upper/Lower Split: A Balanced Approach to Strength Training</h2>
            <p>Another effective option is an upper/lower split, alternating between upper-body and lower-body days. On upper-body days, exercises include incline dumbbell press (3x10), lat pulldown (3x10), dumbbell shoulder press (3x8), bicep curls (3x12), and tricep dips (3x10). On lower-body days, focus on deadlifts (3x8), leg press (3x10), lunges (3x12 each leg), hamstring curls (3x12), and calf raises (3x15). This program allows more focus on each muscle group while giving other areas time to recover.</p>
            
            <h2>Beginner-Friendly Strength Training With Machines</h2>
            <p>For those who prefer machines to start, a beginner-friendly machine-based routine can still build strength and confidence. Start with a leg press (3x12), chest press machine (3x10), lat pulldown (3x10), seated shoulder press (3x10), leg curl machine (3x12), and cable tricep pushdowns (3x12). Machines provide guided movements, making it easier to learn proper technique before transitioning to free weights. No matter which routine is chosen, progressive overload (adding weight or reps over time) is essential for continued improvement.</p>

            <h2>When You Want A Random Workout</h2>
            <p><a href="https://diracdeltas.github.io/random-training/">Option 1</a></p>
            <p><a href="https://spinit.connectedpe.com/">Option 2</a></p>
            <p><a href="https://www.vondy.com/random-workout-generator--DOZyz7io">Option 3</a></p>
            <p><a href="https://croppio.com/">Option 4</a></p>
            </div>
        </div>
    </div>
        <Footer/>
        </>
    );
  }

  export default Workouts