import Blog from "./Blog.jsx";
import Color from "./Color.jsx";
import CourseGoal from "./CourseGoal.jsx"
import Ex1 from "./Ex1.jsx";
import Ex2 from "./Ex2.jsx";
import MovieGrid from "./MovieGrid.jsx";


function App() {
  return (
    <>
     <CourseGoal title="Learn React" description="In-depth" />
     <CourseGoal title="About Ratan Sir" description="Ratan sir nice" /> 
     <Blog/>
     <MovieGrid/>
    <Color/>
    <Ex1/>
    <Ex2/>

    </>
  )
}
export default App;